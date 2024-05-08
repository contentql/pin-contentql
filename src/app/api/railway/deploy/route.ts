const query = `mutation TemplateDeploy($input: TemplateDeployInput!) {
    railway {
        templateDeploy(input: $input) {
            projectId
            workflowId
        }
    }
}
`

const variables = {
  input: {
    services: [
      {
        owner: 'akhil-naidu',
        name: 'MongoDB',
        isPrivate: false,
        commit: null,
        variables: {
          MONGOHOST: '${{ RAILWAY_TCP_PROXY_DOMAIN }}',
          MONGOPORT: '${{ RAILWAY_TCP_PROXY_PORT }}',
          MONGOUSER: '${{ MONGO_INITDB_ROOT_USERNAME }}',
          MONGO_URL:
            'mongodb://${{MONGO_INITDB_ROOT_USERNAME}}:${{MONGO_INITDB_ROOT_PASSWORD}}@${{RAILWAY_TCP_PROXY_DOMAIN}}:${{RAILWAY_TCP_PROXY_PORT}}',
          MONGOPASSWORD: '${{ MONGO_INITDB_ROOT_PASSWORD }}',
          MONGO_PRIVATE_URL:
            'mongodb://${{MONGO_INITDB_ROOT_USERNAME}}:${{MONGO_INITDB_ROOT_PASSWORD}}@${{RAILWAY_PRIVATE_DOMAIN}}:27017',
          MONGO_INITDB_ROOT_PASSWORD:
            '${{ secret(32, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") }}',
          MONGO_INITDB_ROOT_USERNAME: 'mongo',
        },
        template: 'mongo',
        serviceName: 'MongoDB',
        serviceIcon: 'https://devicons.railway.app/i/mongodb.svg',
        startCommand: 'docker-entrypoint.sh mongod --ipv6 --bind_ip ::,0.0.0.0',
        rootDirectory: null,
        healthcheckPath: null,
        hasDomain: false,
        tcpProxyApplicationPort: 27017,
        volumes: [
          {
            mountPath: '/data/db',
          },
        ],
      },
      {
        owner: 'akhil-naidu',
        name: 'pin-hcms',
        isPrivate: false,
        commit: null,
        variables: {
          DATABASE_URI: '${{MongoDB.MONGO_URL}}',
          PAYLOAD_SECRET:
            '${{ secret(32, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") }}',
          NEXT_PUBLIC_PUBLIC_URL: 'https://${{RAILWAY_PUBLIC_DOMAIN}}',
          PAYLOAD_URL: 'https://${{RAILWAY_PUBLIC_DOMAIN}}',
          S3_ENDPOINT: process.env.RAILWAY_S3_ENDPOINT,
          S3_ACCESS_KEY_ID: process.env.RAILWAY_S3_ACCESS_KEY_ID,
          S3_SECRET_ACCESS_KEY: process.env.RAILWAY_S3_SECRET_ACCESS_KEY,
          S3_BUCKET: process.env.RAILWAY_S3_BUCKET,
          S3_REGION: process.env.RAILWAY_S3_REGION,
          RESEND_API_KEY: process.env.RAILWAY_RESEND_API_KEY,
          RESEND_SENDER_EMAIL: process.env.RAILWAY_RESEND_SENDER_EMAIL,
          RESEND_SENDER_NAME: process.env.RAILWAY_RESEND_SENDER_NAME,
          NEXT_PUBLIC_IS_LIVE: 'false',
          PAYLOAD_PUBLIC_DRAFT_SECRET:
            '${{ secret(32, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")}}',
          NEXT_PRIVATE_DRAFT_SECRET:
            '${{ secret(32, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") }}',
          REVALIDATION_KEY:
            '${{ secret(32, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") }}',
          NEXT_PRIVATE_REVALIDATION_KEY:
            '${{ secret(32, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") }}',
        },
        template: 'https://github.com/contentql/pin-hcms',
        serviceName: 'pin-hcms',
        serviceIcon:
          'https://contentql.io/media/ContentQL_Brandmark_Light@2x.png',
        startCommand: null,
        rootDirectory: null,
        healthcheckPath: null,
        hasDomain: true,
        volumes: [],
      },
    ],
    templateCode: 'hQHmGV',
    teamId: 'dd9568ff-b6dd-4151-90a0-ae02633e7705',
  },
}

export async function GET(request: Request) {
  const res = await fetch(
    `https://hasura-template-production.up.railway.app/v1/graphql`,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': process.env.HASURA_API_KEY!,
        Authorization: `Bearer ${process.env.RAILWAY_SUPER_API_KEY}`,
      },
      body: JSON.stringify({ query, variables }),
    },
  )
  const data = await res.json()

  return Response.json({ data })
}
