document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.adkey-seo.com/api/website/get-website/788")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // console.log("data:", data);

      const allMainLinks = document.querySelectorAll(".info-element-custom-button-wrapper");
      // console.log(allMainLinks)
      const allSecondLinks = document.querySelectorAll(".style-klv5yxbzlink");
      // console.log(allSecondLinks)
      let j = 0;
      for (let i = 0; i < allSecondLinks.length; i++) {
        j += 1;
        if (j >= data.offers.length) {
          j = 0;
        }
        allSecondLinks[i].setAttribute("href", data.offers[j].link);
      }

      const allSecondOnlineCasino = document.querySelectorAll(".js-href-second");
      console.log(allSecondOnlineCasino)
      let k = 0;
      for (let i = 0; i < allSecondOnlineCasino.length; i++) {
        k += 1;
        if (k >= data.offers.length) {
          k = 0;
        }
        allSecondOnlineCasino[i].setAttribute("href", data.offers[k].link);
      }


      const galleryMarginContainer = document.querySelectorAll("#pro-gallery-margin-container a");
      console.log(galleryMarginContainer)
      let x = 0;
      for (let i = 0; i < galleryMarginContainer.length; i++) {
        x += 1;
        if (x >= data.offers.length) {
          x = 0;
        }
        galleryMarginContainer[i].setAttribute("href", data.offers[x].link);
      }

      const galleryLinks = document.querySelectorAll('#pro-gallery-comp-klutoylt a');
      // console.log(galleryLinks)

      const gallerySlotsLinks = document.querySelectorAll('#comp-klp2l9kc a');
      // console.log(gallerySlotsLinks);
      const jsHrefMain = document.querySelectorAll('.js-href-main');
      console.log(jsHrefMain, 'this is js')
      jsHrefMain.forEach((el) => {
        el.setAttribute("href", data.offers[0].link);
      });
      allMainLinks.forEach((el) => {
        el.setAttribute("href", data.offers[0].link);
      });
      galleryLinks.forEach((el) => {
        el.setAttribute("href", data.offers[0].link);
      });
      gallerySlotsLinks.forEach((el) => {
        el.setAttribute("href", data.offers[0].link);
      });
    })
    .catch((error) => {
      console.error("Request error:", error);
    });
});
