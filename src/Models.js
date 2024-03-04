import Model1 from './models/love_model.glb'
import Model2 from './models/septemberroom_model.glb'
import Model3 from './models/untitled_model.glb'
import Model6 from './models/judith_model.glb'
import Model4 from './models/amaryllis_model.glb'
import Model5 from './models/woodrow_model.glb'
import Model7 from './models/reclining_model.glb'
import Model8 from './models/hareonbell_model.glb'
import CoverLove from './images/model_love.jpg'
import CoverSeptemberRoom from './images/model_septemberroom.jpg'
import CoverUntitled from './images/model_untitled.jpg'
import CoverWoodrow from './models/Model05/cover.jpg'
import CoverAmaryllis from './models/Model04/cover.jpg'
import CoverJudith from './models/Model06/cover.jpg'
import CoverReclining from './models/Model07/cover.jpg'
import CoverHareOnBell from './models/Model08/cover.jpg'

const Models = [
    {
     name: "LOVE",
      img: CoverLove,
      modelurl: Model1,
      content: "All we need is LOVE, the sculpture originally crafted in 1970 can be found in many variations all over the world in multiple languages.",
      artist: "Robert Indiana",
    },
    {
     name: "September Room",
      img: CoverSeptemberRoom,
      modelurl: Model2,
      content: "Two giant bronze figures have been in the garden since 2017 combinig humans forms and architecture.",
      artist: "Mark Manders",
    },
    {
     name: "Untitled",
      img: CoverUntitled,
      modelurl: Model3,
      content: "Installed in 2011 it consists of four granite rocks each with a colorful stainless steel layer in a corner.",
      artist: "Jim Hodges",
    }
    ,
    {
     name: "Amaryllis",
      img: CoverAmaryllis,
      modelurl: Model4,
      content: "",
      artist: "Tony Smith",
    },
    {
     name: "Woodrow",
      img: CoverWoodrow,
      modelurl: Model5,
      content: "",
      artist: "Deborag Butterfield",
    },
    {
     name: "Without Words",
      img: CoverJudith,
      modelurl: Model6,
      content: "",
      artist: "Judith Shea",
    },
    {
     name: "Reclining Mother and Child",
      img: CoverReclining,
      modelurl: Model7,
      content: "",
      artist: "Henry Moore",
    },
    {
     name: "Hare on Bell on Partland Stone Piers",
      img: CoverHareOnBell,
      modelurl: Model8,
      content: "",
      artist: "Barry Flanagan",
    }
  ];

  export default Models;