function Dashboard() {
  return (
    <div className="dashContainer">
      <h1>Dashboard</h1>
      <p>
        If the content inside your sidebar starts at the top of the window
        instead of below the sidebar, it might be due to the CSS styling applied
        to your sidebar or the structure of your layout. Here are a few
        suggestions to fix this issue: Apply CSS to Sidebar: Make sure that you
        have applied appropriate CSS styles to your sidebar component to
        position it correctly and create space for the content. You can use CSS
        properties like position: fixed or position: sticky to keep the sidebar
        in place while allowing the content to flow below it. Adjust Layout
        Structure: Check the structure of your layout component and ensure that
        the sidebar and content sections are properly organized. It's
        recommended to use CSS flexbox or grid layout to create a consistent and
        responsive layout. You can have a container div for the entire layout,
        with separate divs for the sidebar and content sections. Example
        structure:
      </p>
    </div>
  );
}

export default Dashboard;
