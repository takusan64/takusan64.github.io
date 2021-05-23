const data = {
  header:{
    title: "SiteLogo",
    logo: `${process.env.PUBLIC_URL}/logo172.png`
  },
  contents:[
    {
      type: "table",
      content:{
        title: "Profile",
        discription: "ContentTable",
        content_table:[
          {
            title:"名前",
            discription:"山口 裕也",
            icon:"Person"
          },
          {
            title:"生年月日",
            discription:"1996年 9月12日",
            icon:"CalendarToday"
          },
          {
            title:"職業",
            discription:"システムエンジニア",
            icon:"Work"
          }
        ]
      }
    },
    {
      type: "card",
      content:{
        title: "Work",
        content_card: [
          {
            title: "Sample1",
            discription: "Sample1Sample1Sample1",
            src: `${process.env.PUBLIC_URL}/images/sample.png`,
            content_card_detail: {
              title: "detail1",
              discription: ["https://github.com/takusan64"]
            }
          },
          {
            title: "Sample2",
            discription: "Sample2Sample2Sample2",
            src: `${process.env.PUBLIC_URL}/images/sample.png`,
            content_card_detail: {
              title: "detail2",
              discription: ["detail2detail2detail2"]
            }
          },
          {
            title: "Sample3",
            discription: "Sample3Sample3Sample3",
            src: `${process.env.PUBLIC_URL}/images/sample.png`,
            content_card_detail: {
              title: "detail3",
              discription: ["detail3detail3detail3"]
            }
          }
        ]
      }
    },
    {
      type: "card",
      content:{
        title: "Portfolio",
        content_card: [
          {
            title: "Sample1",
            discription: "Sample1Sample1Sample1",
            src: `${process.env.PUBLIC_URL}/images/sample.png`,
            url:"https://github.com/takusan64",
            content_card_detail: {
              title: "detail1",
              discription: ["https://github.com/takusan64"]
            }
          },
          {
            title: "Sample2",
            discription: "Sample2Sample2Sample2",
            src: `${process.env.PUBLIC_URL}/images/sample.png`,
            url:"https://github.com/takusan64",
            content_card_detail: {
              title: "detail2",
              discription: ["detail2detail2detail2"]
            }
          },
          {
            title: "Sample3",
            discription: "Sample3Sample3Sample3",
            src: `${process.env.PUBLIC_URL}/images/sample.png`,
            url:"https://github.com/takusan64",
            content_card_detail: {
              title: "detail3",
              discription: ["detail3detail3detail3"]
            }
          }
        ]
      }
    }
  ],
  footer:{
    copy_right:"Copyright © 2021 @takusan64 All Rights Resarved.",
    contacts:[
      {
        src:`${process.env.PUBLIC_URL}/images/github-icon.png`,
        url:"https://github.com/takusan64",
        discription:"GitHubのマイページ"
      },
      {
        src:`${process.env.PUBLIC_URL}/images/youtube-icon.png`,
        url:"https://www.youtube.com/channel/UCM8zpiYU0TBTuPXOQ18JdeQ",
        discription:"Youtubeのマイページ"
      },
      {
        src:`${process.env.PUBLIC_URL}/images/qiita-icon.png`,
        url:"https://qiita.com/takusan64",
        discription:"Qiitaのマイページ"
      }
    ]
  }
}

export default data