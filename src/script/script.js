function onRedirect(path) {
    const origin = window.location.origin
    window.location.assign(`${origin}/src/pages/${path}`);
  }