// Templates.jsx
'use client'

import Layout from '../components/layout/Layout'

import Templates from '@/components/sections/Templates'

// Templates.jsx

// Templates.jsx

// Templates.jsx

function TemplatesView() {
  // const searchParams = useSearchParams();
  // const [filter, setFilter] = useState(
  //   searchParams.get("category") ? searchParams.get("category") : ""
  // );
  // const filterByName = (template) => {
  //   if (filter === "All") return true;
  //   return template.category.toLowerCase().includes(filter.toLowerCase());
  //};

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls='navbar-dark inner-page-header'>
        {/* <TemplateFilter filter={filter} setFilter={setFilter} /> */}
        <Templates />
      </Layout>
    </>
  )
}

export default TemplatesView
