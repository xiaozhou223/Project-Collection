const news = [{
    id: '123456',
    title: '我校学子勇夺世界军人运动会羽毛球项目金牌',
    poster: 'http://www.ahnu.edu.cn/__local/F/72/F2/B24C3AF40EC7554DFC52F5F2113_B103F450_2014E.jpg',
    content: '在羽毛球男子团体比赛中，谭强与两届奥运会冠军张楠搭档，帮助中国队以四战全胜、一场未失的战绩，夺得本届军运会羽毛球男团金牌，这也是我国军运会史上第一枚羽毛球项目金牌。10月26日，谭强和搭档张楠又以2比0战胜队友刘成、王懿律，获得男双冠军，此外，谭强还与搭档杜玥获得混双项目银牌。',
    add_date: '2019-10-27'
  },
  {
    id: '111111',
    title: '我校民族管弦乐团圆满完成2019年高雅艺术进校园演出活动',
    poster: 'http://www.ahnu.edu.cn/__local/4/EF/46/4598EE7BA7F576B4FE1215F96B9_1C119379_AAC9.jpg',
    content: '弦乐悠扬，国韵飘香。在举国上下庆祝中华人民共和国成立70周年之际，10月10至21日，由安徽省教育厅、文化厅、财政厅主办，安徽师范大学承办的2019年安徽省“高雅艺术进校园”活动--安徽师范大学民族管弦乐团专场音乐会，在安徽信息工程学院、安徽三联学院、安徽文达信息工程学院、安徽外国语学院、亳州学院、蚌埠学院、马鞍山工学院、池州学院8所高校举行。',
    add_date: '2019-10-27'
  },
  {
    id: '222222',
    title: '“中新苏滁高新区杯”第十四届安徽省大学生职业规划设计大赛暨大学生创业大赛决赛在我校举行',
    poster: 'http://www.ahnu.edu.cn/__local/D/A6/F3/3FED1DC84E3F9E1CCE85AF4A1AC_1DCC1CFA_18921.jpg',
    content: '10月26日至27日，“中新苏滁高新区杯”第十四届安徽省大学生职业规划设计大赛暨大学生创业大赛决赛在我校花津校区举行。经校园初赛、省半决赛选拔，共有来自66所高校的53名职业规划选手和50支创业团队入围省总决赛。我校文学院汉语言文学（师范）专业穆妮热和美术学院工艺美术专业创业团队代表安徽师范大学分别参加职业规划组和创业组的比赛，最终双双斩获金奖，我校荣获“最佳组织奖”。',
    add_date: '2019-10-28'
  }
];


// 自定义函数：获取新闻列表
function getNewsList() {
  let list = [];
  for (var i = 0; i < news.length; i++) {
    let obj = {};
    obj.id = news[i].id;
    obj.title = news[i].title;
    obj.add_date = news[i].add_date;
    obj.poster = news[i].poster;

    list.push(obj)
  }

  return list;
}


// 自定义函数：获取新闻内容
function getNewsDetail(newsID) {
  let msg = {
    code: '404',
    news: {}
  };

  for (var i = 0; i < news.length; i++) {
    if (newsID == news[i].id) {
      msg.code = '200';
      msg.news = news[i];
      break;
    }
  }

  return msg;

}

module.exports = {
  getNewsList: getNewsList,
  getNewsDetail: getNewsDetail
}