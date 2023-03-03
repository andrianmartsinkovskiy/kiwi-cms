export const downloadFileHelper = (path, name) => {
  fetch(process.env.REACT_APP_API_URL + path).then(response => {
    response.blob().then(blob => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = name;
      alink.click();
    })
  })
}