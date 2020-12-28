const courses = require("./course");

const cardId = "YImpfrqG"

// https://trello.com/app-key
const APIkey = ""
const APItoken = ""

const axios = require("axios");

const delay = (time) => new Promise(res => setTimeout(res, time));

let count = 0;

async function main() {
  try {
    for (let i = 0; i < courses.length; i++) {
      const eachCourse = courses[i];
      const { heading, videoLabels } = eachCourse;
      // create a checkList with heading
      const headingCheckListres = await axios.default.post(`https://api.trello.com/1/cards/${cardId}/checklists?key=${APIkey}&token=${APItoken}&name=${encodeURIComponent(heading)}`)

      count++;

      console.log(`Created Header - ${heading} - Request Number - ${count}`)
      await delay(500)

      for (let j = 0; j < videoLabels.length; j++) {
        const videoLabel = videoLabels[j];
        await axios.default.post(`https://api.trello.com/1/checklist/${headingCheckListres.data.id}/checkItems?key=${APIkey}&token=${APItoken}&pos=bottom&name=${encodeURIComponent(videoLabel)}`)

        count++;

        console.log(`Created VideoLabel - ${videoLabel} - Request Number - ${count}`)
        await delay(500)
      }


    }
  } catch (error) {
    console.log({ ...error.response })
  }

  console.log(`Total Number of requets = ${count}`)
}

main()