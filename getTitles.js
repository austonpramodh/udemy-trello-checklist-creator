//Copy this and paste it in the console
let expandAllBtn = $("[data-purpose=\"expand-toggle\"]")

if (expandAllBtn) expandAllBtn.click()

let sectionElements = $(".clp-component-render [data-purpose=\"course-curriculum\"] :nth-child(3)").children

let courses = [];
for (let i = 0; i < sectionElements.length; i++) {
  const element = sectionElements[i]
  const heading = element.querySelector(".udlite-accordion-panel-title > span").innerText;
  const videoLabelElements = element.querySelectorAll(".udlite-block-list-item-content div span")
  const videoLabels = []
  for (let j = 0; j < videoLabelElements.length; j++) {
    const videoElement = videoLabelElements[j];
    videoLabels.push(videoElement.innerText)
  }

  courses.push({ heading, videoLabels })
}

console.log(JSON.stringify(courses))
