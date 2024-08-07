function Logout() {
  return (
    <>
      <a href="page-error-404.html" className="m ai-icon">
        <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" className="text-danger" width="28"
             height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      </a>
    </>
  )
}

export default Logout;
