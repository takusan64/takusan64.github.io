const data = {
  header: {
    title: "SiteLogo",
    logo: `${process.env.PUBLIC_URL}/logo172.png`,
    src: `${process.env.PUBLIC_URL}/images/sky.jpg`,
    contents_name: ["Profile", "Work", "Portfolio"]
  },
  contents: [
    {
      type: "table",
      content: {
        title: "Profile",
        discription: "ContentTable",
        content_table: [
          {
            title: "名前",
            discription: "山口 裕也",
            icon: "Person"
          },
          {
            title: "生年月日",
            discription: "1996年 9月12日",
            icon: "CalendarToday"
          },
          {
            title: "職業",
            discription: "システムエンジニア",
            icon: "Work"
          }
        ]
      }
    },
    {
      type: "card",
      content: {
        title: "Work",
        content_card: [
          {
            title: "製品連携プラットフォームの開発",
            discription: [
              "製品間の連携を行うためのプラットフォームの開発を行いました。",
              "コア技術としてNode-REDを利用しています。"
            ],
            src: `${process.env.PUBLIC_URL}/images/work1.png`,
            content_card_detail: {
              title: "使用技術",
              discription: [
                "使用言語：Node.js/Python",
                "通信プロトコル：HTTP/MQTT/WebSocket",
                "開発環境：Git/Docker",
                "OS：Winodws/Linux(RaspberryPi)"
              ]
            }
          },
          {
            title: "入力フォーム作成アプリ",
            discription: [
              "様々な入力パーツを用いて、入力フォームを構築するアプリの開発を行いました。",
              "create-react-appを用いています。"
            ],
            src: `${process.env.PUBLIC_URL}/images/work2.jpg`,
            content_card_detail: {
              title: "使用技術",
              discription: [
                "フロントエンド：React.js/TypeScript",
                "バックエンド：Express",
                "データベース：MongoDB",
                "開発環境：Git/Docker",
                "OS：Winodws/Linux(RaspberryPi)"
              ]
            }
          }
        ]
      }
    },
    {
      type: "card",
      content: {
        title: "Portfolio",
        content_card: [
          {
            title: "自己紹介サイト",
            discription: [
              "本サイトになります。",
              "ViewとModelの分離を意識して作成しています。",
              "create-react-appを用いて作成しています。"
            ],
            src: `${process.env.PUBLIC_URL}/images/portfolio1.png`,
            url: "https://takusan64.github.io/",
            content_card_detail: {
              title: "使用技術",
              discription: [
                "フロントエンド：React.js/TypeScript",
                "本番環境：GitHug.io"
              ]
            }
          },
          {
            title: "設備の生産数分析のサンプル画面",
            discription: [
              "工作機械の生産数を分析する画面のデモになります。",
              "社内の新製品案として作成しました。",
              "Rechartsを用いてグラフを作成しています。"
            ],
            src: `${process.env.PUBLIC_URL}/images/portfolio2.png`,
            url: "https://jsongraphdemo.herokuapp.com/",
            content_card_detail: {
              title: "使用技術",
              discription: [
                "フロントエンド：React.js/TypeScript",
                "本番環境：Heroku"
              ]
            }
          }
        ]
      }
    }
  ],
  footer: {
    copy_right: "Copyright © 2021 @takusan64 All Rights Resarved.",
    contacts: [
      {
        src: `${process.env.PUBLIC_URL}/images/github-icon.png`,
        url: "https://github.com/takusan64",
        discription: "GitHubのマイページ"
      },
      {
        src: `${process.env.PUBLIC_URL}/images/youtube-icon.png`,
        url: "https://www.youtube.com/channel/UCM8zpiYU0TBTuPXOQ18JdeQ",
        discription: "Youtubeのマイページ"
      },
      {
        src: `${process.env.PUBLIC_URL}/images/qiita-icon.png`,
        url: "https://qiita.com/takusan64",
        discription: "Qiitaのマイページ"
      }
    ]
  }
}

export default data