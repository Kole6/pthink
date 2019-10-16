// 产品内页 标题与概要数据
  const titleData = [
    {name:'数据产品',index:0,title:'省市级数据管理平台',text:'省市级数据管理平台遵循教育部职业教育相关规定，通过学校人才培养工作状态数据的自动采集、分析校验，实现关键数据指标的质量监测和数据上报，实现区域教育行政管理部门对所辖职业院校的详情管理、运行状态统计分析和人才培养质量的实时管理与服务。'},
    {name:'数据产品',index:1,title:'校本数据中心平台',text:'校本数据中心平台动态管理学校数据标准，当数据标准发生变化时，在数据中心进行调整，可以快速生成符合新标准的数据。采集学校所有数据，按照数据标准要求，对其进行清洗、过滤、转换、加载等，生成数据资源目录。提供数据共享门户，供师生订阅使用；提供数据接口，供第三方调用，后续所有新增信息系统都要对接数据中心。对接省市、国家状态数据采集平台，实现状态数据的自动上报；一键生成质量年报、中基报表等数据，实现“一次填报、到处使用”，为学校诊断改进提供数据支撑。'},
    {name:'数据产品',index:2,title:'数据标准与咨询服务',text:'随着教育管理信息化发展，教育部、区域各级教育行政部门均在加强教育业务管理信息系统和大数据中心建设，充分利用教育大数据支撑保障教育管理、决策和公共服务。教育行政部门有必要完善教育数据标准规范，促进教育政务数据分级分层有效共享，避免数据重复采集、保证一数一源，优化业务管理、提升信息化管理能力，提升公共服务、促进决策支持。'},
    {name:'数据产品',index:3,title:'数据服务与接口平台',text:'数据接口服务平台是大数据时代实现数据开放共享、提升教育教学质量的重要桥梁。各级数据中心和业务数据仓库的建立，大大减少了数据收集、填报的工作量，基于数据中心，开发各类数据服务及接口，提高数据的多次使用效率，保证共享后数据的唯一性和有效性。基于加密技术对接口及用户进行双重加密，提供上下行接口，第三方系统可以通过调用接口实现数据共享。'},

    {name:'智慧校园',index:0,title:'中职学校综合管理系统',text:'中职学校综合管理系统是一个中职学校综合性管理与服务的系统，系统实现了学校日常管理工作的信息化、电子化，为全校的管理人员、学生、教职工提供了一个日常教学、行政办公、人事、学生工作、总务等所有涉及到学校日常业务的管理与服务。'},
    {name:'智慧校园',index:1,title:'高职智能校园管理系统',text:'智能校园管理系统集“日常教育教学管理应用” 、“教学与教学资源共享”、“内部质量保证体系诊断与改进”、“精细化智能化管理”和“大数据采集、分析与应用”为一体，通过“应用驱动”的原则将信息技术与学校教育教学和管理深度融合，实现教育信息化、决策科学化和管理规范化，不断提升学校人才培养质量。'},
    {name:'智慧校园',index:2,title:'中职学校管理信息系统（国家标准版）',text:' 基于“云计算”部署，采用Saas模式，以当前职业院校教学工作诊断与改进的内涵要求为核心，为学校提供一站式数据采集、一键式数据上报服务。服务各级教育行政部门及学校的数据挖掘与分析应用、支撑科学决策和统筹管理，助推各级教育行政部门及学校管理水平的提升。'},
    {name:'智慧校园',index:3,title:'专业资源中心平台',text:'专业资源中心以建设专业优质资源为核心，以专业课程体系为主线，可建设完善的专业体系，内容涵盖专业发展方向、人才培养方案、课程设置、课程内容、专业资源、师资队伍、实训设备等，是学校进行专业建设、学生进行专业学习、社会了解学校专业教学体系的平台和窗口。'},
    
    {name:'质量管理',index:0,title:'智慧魔方系统',text:'建立学校人才培养质量保证体系，用信息化的工具使质量目标落到实处，质量任务可以拆解，数据过程得以保存，诊改工作有据可依，改进路径有据可循，帮助学校形成常态化自我诊断与改进机制。基于学校现有教学业务系统产生的数据，进行学生、教师、课程、专业、学校五个层面的分析，及时发现、定位学校五个层面的各种问题，提高学校透明化管理。系统支撑全校质量分析体系建设，实时预警分析，质量报告导出，对异常数据进行针对性管理，抓取学校整体治理数据，辅助校领导进行决策。'},
    {name:'质量管理',index:1,title:'KPI决策分析系统',text:'以学校业务系统数据为基础，对学校动态数据进行深度挖掘，将日常管理数据以可视化图形图表的方式动态展示并统计分析，使管理者可以实时动态观测各项状态数据，过程中预警、过程中干预，使所有数据可以追溯源头，查出原因，并可以在一线解决，达成监测质量的目标。'},
    {name:'质量管理',index:2,title:'课堂教学质量监控平台',text:'课堂教学质量监测平台是应用现代信息技术手段构建的一种新型课堂教学模式，是融合现代教育理念、教学内容和现代信息技术具有多种功能的开放式的教与学交互系统。适用于全校学生的辅助学习、教师辅助教学的交互式教与学的应用平台。能支撑开展课堂教学活动，实现在线备课、互动课堂、教学资源建设等涉及课前、课中、课后的教学实施全过程。平台提供在线教学质量数据分析功能，支持学校课堂教学质量的提升，支持提升学校在课程建设、专业建设、信息化课堂教学、教学质量管理等方面的综合质量和水平。'},
    {name:'质量管理',index:3,title:'教学诊改运行管理平台',text:'教学工作诊断与改进运行管理平台是一款能够辅助中职学校进行教学工作诊断与改进的平台。平台主要对《中等职业学校教学工作诊断与改进指导方案（试行）》中诊断项目包含的诊断大项、诊断要素和诊断点实现加权打分计算，并且通过状态报告和图表直观地呈现学校诊断与改进工作的达成情况和完成趋势，大大节省了学校人工计算成本，方便学校整体监测学校诊断与改进工作进展。'},

    {name:'C端应用',index:0,title:'C 证—教育可信电子证',text:'C 证—教育可信电子证基于Oauth2.0身份认证，支持账号口令、证书、移动客户端扫码等多种网络主体身份认证方式，与公安、CA机构、教育部等权威认证源对接进行实名验证，提供“多维可信身份属性综合服务体系”。为师生提供统一身份认证，享受一站式登录，一个实名畅享所有服务。'},
    {name:'C端应用',index:1,title:'移动智能校园',text:'系统以发展性评价为基本原则，采用个性化记录与综合评价量表方式，实现“自评、互评、师评、企评”，对学生各个评价维度进行全面评价，辅助科学选拔人才，促进学生全面发展，为用人单位评聘人才和高等院校招录新生提供依据。平台汇聚学生的主观评价信息，客观表现信息，然后对其分析，生成学生综合素质评价报告单。'},
    {name:'C端应用',index:2,title:'学有涯自适应学习平台',text:'学有涯是一款面向K12教育的产品，产品分为助学端和助教端，助学端面向中小学生，帮助学生进行错题册管理，以及对单元章节知识掌握情况进行在线测评；通过课本章节和知识点的关联，通过特定教辅的题目和知识点的关联，通过每个学生对未掌握知识点的关联，通过这三个关联，可以帮助学生紧紧围绕课本，针对性地做包含未掌握知识点的题，去掉大量的重复性的劳动，高效学习。把学生的时间还给学生自己。助教端面向中小学校、教育部门，建立教学质量测评体系，对老师的教学行为进行观测，对老师所带班级学生成绩分析，从而对教学质量进行测评，同时记录学生的课堂行为，可以分析特定教师某个知识点教学上可能由问题，特定学校相比较而言哪些知识点的教学上需要该进。'},
  ]
//   产品内页轮播图数据
const picData = [
    {name: "数据产品",index: 0,img: require("@/assets/img/product/detail/p1_2_1.jpg")},
    {name: "数据产品",index: 0, img: require("@/assets/img/product/detail/p1_2_2.jpg")},
    {name: "数据产品",index: 0, img: require("@/assets/img/product/detail/p1_2_3.jpg")},
    {name: "数据产品",index: 0, img: require("@/assets/img/product/detail/p1_2_4.jpg")},

    {name: "数据产品",index: 1,img: require("@/assets/img/product/detail/p1_1_1.png")},
    {name: "数据产品",index: 1, img: require("@/assets/img/product/detail/p1_1_2.jpg")},
    {name: "数据产品",index: 1, img: require("@/assets/img/product/detail/p1_1_3.jpg")},
    // 数据服务与接口平台 尚未推出，预留版面，内容后续补充 (已补充)
    {name: "数据产品",index: 2,img: require("@/assets/img/product/detail/p1_3_1.jpg")},
    {name: "数据产品",index: 2, img: require("@/assets/img/product/detail/p1_3_2.jpg")},
    {name: "数据产品",index: 2, img: require("@/assets/img/product/detail/p1_3_3.jpg")},

    {name: "数据产品",index: 3, img: require("@/assets/img/product/detail/p1_4_1.jpg")},
    {name: "数据产品",index: 3, img: require("@/assets/img/product/detail/p1_4_2.jpg")},
    {name: "数据产品",index: 3, img: require("@/assets/img/product/detail/p1_4_3.jpg")},

    {name: "智慧校园",index: 0, img: require("@/assets/img/product/detail/p2_1_1.jpg")},
    {name: "智慧校园",index: 0, img: require("@/assets/img/product/detail/p2_1_2.jpg")},
    {name: "智慧校园",index: 0, img: require("@/assets/img/product/detail/p2_1_3.jpg")},

    {name: "智慧校园",index: 1, img: require("@/assets/img/product/detail/p2_2_1.jpg")},
    {name: "智慧校园",index: 1, img: require("@/assets/img/product/detail/p2_2_2.jpg")},
    {name: "智慧校园",index: 1, img: require("@/assets/img/product/detail/p2_2_3.jpg")},
    {name: "智慧校园",index: 1, img: require("@/assets/img/product/detail/p2_2_4.jpg")},

    {name: "智慧校园",index: 2, img: require("@/assets/img/product/detail/p2_3_1.jpg")},
    {name: "智慧校园",index: 2, img: require("@/assets/img/product/detail/p2_3_2.jpg")},
    {name: "智慧校园",index: 2, img: require("@/assets/img/product/detail/p2_3_3.jpg")},

    {name: "智慧校园",index: 3, img: require("@/assets/img/product/detail/p2_4_1.jpg")},
    {name: "智慧校园",index: 3, img: require("@/assets/img/product/detail/p2_4_2.jpg")},
    {name: "智慧校园",index: 3, img: require("@/assets/img/product/detail/p2_4_3.jpg")},

    {name: "质量管理",index: 0, img: require("@/assets/img/product/detail/p3_2_1.jpg")},
    {name: "质量管理",index: 0, img: require("@/assets/img/product/detail/p3_2_2.jpg")},
    {name: "质量管理",index: 0, img: require("@/assets/img/product/detail/p3_2_3.jpg")},

    {name: "质量管理",index: 1, img: require("@/assets/img/product/detail/p3_1_1.jpg")},
    {name: "质量管理",index: 1, img: require("@/assets/img/product/detail/p3_1_2.jpg")},
    {name: "质量管理",index: 1, img: require("@/assets/img/product/detail/p3_1_3.jpg")},

    // {name: "质量管理",index: 1, img: require("@/assets/img/product/detail/p3_2_4.jpg")},

    {name: "质量管理",index: 2, img: require("@/assets/img/product/detail/p3_3_1.jpg")},
    {name: "质量管理",index: 2, img: require("@/assets/img/product/detail/p3_3_2.jpg")},
    {name: "质量管理",index: 2, img: require("@/assets/img/product/detail/p3_3_3.jpg")},

    {name: "质量管理",index: 3, img: require("@/assets/img/product/detail/p3_4_1.jpg")},
    {name: "质量管理",index: 3, img: require("@/assets/img/product/detail/p3_4_2.jpg")},
    {name: "质量管理",index: 3, img: require("@/assets/img/product/detail/p3_4_3.jpg")},
    // {name: "质量管理",index: 3, img: require("@/assets/img/product/detail/p3_4_4.jpg")},

    {name: "C端应用",index: 0, img: require("@/assets/img/product/detail/p4_1_1.jpg")},
    {name: "C端应用",index: 0, img: require("@/assets/img/product/detail/p4_1_2.jpg")},
    {name: "C端应用",index: 0, img: require("@/assets/img/product/detail/p4_1_3.jpg")},

    {name: "C端应用",index: 1, img: require("@/assets/img/product/detail/p4_2_1.jpg")},
    {name: "C端应用",index: 1, img: require("@/assets/img/product/detail/p4_2_2.jpg")},
    {name: "C端应用",index: 1, img: require("@/assets/img/product/detail/p4_2_3.jpg")},
    {name: "C端应用",index: 1, img: require("@/assets/img/product/detail/p4_2_4.jpg")},

    {name: "C端应用",index: 2, img: require("@/assets/img/product/detail/p4_3_1.jpg")},
    {name: "C端应用",index: 2, img: require("@/assets/img/product/detail/p4_3_2.jpg")},
    {name: "C端应用",index: 2, img: require("@/assets/img/product/detail/p4_3_3.jpg")},
  ];
//   产品内页 产品特色数据
const specialData = [
    {index:0,name:'数据产品',title:'统一数据标准，对接国家平台',text:'统一数据标准，实现常态化数据采集；遵循教育部相关标准规范，实现与国家级数据平台的完美对接、无缝融合。'},
    {index:0,name:'数据产品',title:'分析预警、科学决策',text:'深层次挖掘分析数据质量，精准监测、预警分析、可视化呈现，为管理者提供决策支持。'},
    {index:0,name:'数据产品',title:'功能全面、支持扩展',text:'提供数据采集、监测预警等功能，并可进行自由的模块化整合，为各级教育行政部门提供数据统计、挖掘分析、工作统筹管理等服务。'},

    {index:1,name:'数据产品',title:'规范的数据治理体系',text:'提供数据治理服务，厘清全校各类数据，形成学校基础数据标准、规范的数据流程、基础数据库，为学校现有管理系统工具的数据对接制定规范标准，确保原有系统在学校完善的数据体系下良好运行和数据规范入库。'},
    {index:1,name:'数据产品',title:'端到端的数据处理方案',text:'提供从数据归集、数据融合到数据开放服务、数据应用的一体化解决方案。全流程可视化处理，方便非专业用户的使用。'},
    {index:1,name:'数据产品',title:'数据源权威性设置',text:'支持学生、教师或教学机构的每个数据项单独设置数据来源的权威性。调整某个数据项的数据来源权威性后，该数据项的值更新为权威性高的数据源对应的值。'},
    {index:1,name:'数据产品',title:'与国家级、省市级平台对接融合',text:'实现与教育部国家级系统、省市级系统进行无缝对接，并达到数据融合，实现数据的上下互动和一致化应用。'},

    {index:2,name:'数据产品',title:'符合国家标准、结合地方实际',text:'以教育部2012年发布的教育管理信息行业标准中的相关数据项为基础，遵从教育部教育管理信息行业标准7个标准，以及地方相关标准规范。'},
    {index:2,name:'数据产品',title:'专家引领，权威指导',text:'公司咨询服务团队拥有多位国家级教育专家，参与过贵州、上海、广州等多个省市的咨询服务，拥有丰富的咨询服务经验。'},

    {index:3,name:'数据产品',title:'双层的安全保障',text:'平台提供双层安全保障，分别对接口、用户接入进行安全认证，有效保障数据安全。平台对敏感数据进行保护，通过控制用户的访问权限、对敏感数据脱敏处理以及审计功能，防止敏感数据泄露。'},
    {index:3,name:'数据产品',title:'完备的运维监控',text:'平台提供完备的日常运维监控服务，针对从上层应用平台到底层基础平台的各个功能模块和组件进行监控，从而进行分析判断，并对异常数据触发告警。'},
    {index:3,name:'数据产品',title:'丰富的资源渠道',text:'公司拥有众多资源及资源获取渠道，包括从互联网爬取开放职业教育相关数据，从政府部门获取非敏感数据，以及从合作伙伴获取众多数据资源。对这些资源进行梳理，脱敏，从而形成可对外开放的各类数据。'},

    {index:0,name:'智慧校园',title:'跨校区管理，提高管理效率',text:'实现学校日常工作中多校区、跨时间与空间管理，优化工作流程，加强部门协作，提高管理效率，为管理改革提供支撑。'},
    {index:0,name:'智慧校园',title:'模块化设计，可自由组合',text:'实现校内各业务线管理工作的电子化、信息化的同时，兼顾学校近期和长远发展，选用先进的模块功能，进行最佳性能组合，利用有限的投资构造性价比最佳的系统平台。'},
    {index:0,name:'智慧校园',title:'打破数据孤岛，提供数据支撑',text:'实现校内各业务线工作的信息化，构建统一的各部门协同工作管理，实现从“问你要”到“我要即得”，打破各业务部门独立的业务与数据“孤岛”，为决策分析、数据上报提供数据支撑。'},

    {index:1,name:'智慧校园',title:'对接国家平台，实现常态化诊改',text:'与国家“高职院校人才培养工作状态数据采集与管理平台”无缝对接，实现状态数据平台数据实时提取、实时“诊改”，为学校建立常态化的诊断与改进机制，促进学校持续改进提升。'},
    {index:1,name:'智慧校园',title:'博采众长，以数据为核心',text:'坚持以数据为核心的理念，把校园作为一个整体来看待，全面实现数据的源头唯一，使不同应用模块间的资源能够共建共享以及互通互连。'},
    {index:1,name:'智慧校园',title:'自动化流程工具',text:'系统提供流程管理工具，学校可根据需要自行设置业务流程。流程管理工具包含协同系统、流程管理、系统设置等主要功能。利用鼠标拖拽，即可在可视化界面中生成流程。'},

    {index:2,name:'智慧校园',title:'移动端伴随式应用入口',text:'提供移动终端采集通道，进行学生、教师、学校信息的实时采集更新，以及数据的综合查询统计。具有二维码身份识别功能，集成查询、服务、认证和身份识别。'},
    {index:2,name:'智慧校园',title:'校端数据源头采集',text:'分配数据采集任务到个人，通过过程数据的定时采集和状态数据的阶段采集，实现对学校数据的完整收集、准确入库、屏蔽差异。帮助学校规范业务数据管理，不断提升数据真实性和质量'},
    {index:2,name:'智慧校园',title:'继承省市平台数据',text:'支持从省级平台同步已有数据，在校端填报数据，校验审核后上报入库，确保数据质量。校端填报的数据也可以用于数据分析等扩展应用。'},

    {index:3,name:'智慧校园',title:'科学的专业架构设计，展示学校专业地图',text:'通过平台可建设完善的专业体系，内容涵盖专业发展方向、人才培养方案、课程设置、课程内容、专业资源、师资队伍、实训设备等。'},
    {index:3,name:'智慧校园',title:'预设的专业建设模块，让专业建设更简单',text:'根据专业架构，系统预设了专业建设的模块，供专业网站建设导航、丰富的专业建设模板，每个专业负责人只需根据系统导航，就可快速搭建符合专业特色的专业网站。网站内容编辑操作方便、界面友好，与word界面极为相似。'},
    {index:3,name:'智慧校园',title:'统一的校端建设标准，保障学校专业教学质量',text:'平台统一了专业建设的校端标准，使教师在专业建设过程中有标准可依，最终保障学校专业建设的教学质量。'},
    {index:3,name:'智慧校园',title:'有序的自主学习，打造进阶式学习平台',text:'搭建专业资源体系，通过不同层次的进阶式学习，满足各层次使用者（学生学习、专业教学、课程建设、企业员工技术培训与社会人员继续教育）的共性化和个性化需求。'},

    {index:1,name:'质量管理',title:'个性定制评估体系',text:'学校根据自身的需要自定义字段，将最关心的数据及时用动态图标的方式展现出来,KPI决策分析平台整理现有的数据，基于智能算法提出对应的诊断改进建议，帮助提升职业院校的办学质量。'},
    {index:1,name:'质量管理',title:'源头采集自动分析',text:'校园大数据与系统通过统一标准的接口进行数据对接，实现源头采集，进行全方位的分析后直观呈现在管理者面前。'},
    {index:1,name:'质量管理',title:'实时监测预警机制',text:'系统根据实时监测本学校各个数据节点的变化情况，分析变化趋势，让院校实现对未来发展形势的预警。'},
    {index:1,name:'质量管理',title:'指标项可视化图形展示',text:'根据指标项值自动生成仪表盘图形数据，形象直观的体现了指标项对应的指标值以及指标的发展趋势。'},

    {index:0,name:'质量管理',title:'过程化、可视化',text:'发挥大数据作用，质量管理评价围绕数据与过程展开；让大数据说话，以图形图表可视化呈现采集数据。'},
    {index:0,name:'质量管理',title:'可变模型，智能运算',text:'质量目标的筛选、搜索、定义都可个性化设置；发挥智能运算与推荐的作用，系统自动推送智慧建议。'},
    {index:0,name:'质量管理',title:'监测预警，自动生成报告',text:'展现面向服务和人群的集成界面，实现质量过程收集、监测预警；自动生成自我诊改报告、专项质量分析报告。'},
    {index:0,name:'质量管理',title:'多维智库，常态无形',text:'场外专家与数据支持，提供参考意见与同比数据；系统应用贴近师生日常生活，让质量管理趋于无形。'},

    {index:2,name:'质量管理',title:'随时随地教学',text:'一系统双平台完美构建学生课上课下学习环境，随时随地教学。'},
    {index:2,name:'质量管理',title:'高效备课',text:'在线教案设计，高质量教案分享，利用碎片时间，实时在线预览，一键同步云盘，一键到教室。'},
    {index:2,name:'质量管理',title:'行动导向教学工具',text:'行动导向教学工具，构建活跃、思索的信息化课堂环境。'},
    {index:2,name:'质量管理',title:'持续改进',text:'记录过程，利用人工智能，大数据等技术进行分析，实现持续诊改。'},

    {index:3,name:'质量管理',title:'诊断项目个性化设置，权重系数自主调节，科学打分',text:'平台以“贴合学校诊改工作需求”为设计理念，支持学校根据自身发展情况与诊改工作要求对诊断项目中的诊断点、诊断要素以及诊断大项与权重分配进行调整，科学反映诊改工作情况。'},
    {index:3,name:'质量管理',title:'诊改趋势呈现方式多样化、可视化',text:'平台采用柱状图、折线图以及数据图表等多种可视化形式呈现每个诊断大项、诊断要素、诊断点的目标达成情况，直观反映学校诊改工作进程。'},
    {index:3,name:'质量管理',title:'记录诊断点问题类型、改进措施及成果，伴随式收集诊断点改进进程',text:'平台遵循“五横五纵”的建设思路，对诊断点问题类型进行精准记录，存储各诊断点改进过程中的成果，为学校决策与管理提供参考。'},
    
    {index:0,name:'C端应用',title:'实体、移动结合的CA认证',text:'支持实体CA和移动CA两种CA证书。移动CA证书克服传统USB-CA不易携带的缺点，符合互联网时代师生的实际需求。'},
    {index:0,name:'C端应用',title:'教育身份识别',text:'系统对接教育部学籍系统，可权威的识别用户的教育身份，包括教师、学生、教育行政人员等不同的身份。'},
    {index:0,name:'C端应用',title:'多终端支持',text:'系统采用响应式布局，可自动适配PC端和移动设备（PAD, 手机）；支持Web，Android和IOS应用的接入。'},

    {index:1,name:'C端应用',title:'科学的评价模型',text:'系统提供科学的学生综合素质评价数据分析模型，该模型经过国内职教专家的多次论证及试点实践，可客观评价学生综合素质。对采集任务产生的数据、评价任务的结果进行建模。'},
    {index:1,name:'C端应用',title:'数据质量监测',text:'量表设计、评价指标灵活配置，满足持续改进要求。按照综合素质指标进行分析，监测数据质量，分析各质量要素的过程数据，发现问题，反馈问题、跟进问题处理。'},
    {index:1,name:'C端应用',title:'参与角色众多、分工明确',text:'评估院可以根据实际需要构建评价任务，每一个评价任务包括学期，启动类型（手动、自动），评价量表设置等。学校管理员接收该任务，并进行下发。'},

    {index:2,name:'C端应用',title:'个性化学习',text:'学有涯的智慧题库和测评系统将能帮助学生快速测试自己的所学知识，并且系统能及时反馈，让学生能根据测评情况，制定个性化的学习方案。'},
    {index:2,name:'C端应用',title:'大数据智能分析平台',text:'在助教端为学校管理机构、教育行政部门提供自助式大数据分析平台工具，用户自定义度量和维度生成分析图表。'},
    {index:2,name:'C端应用',title:'OCR识别',text:'聚焦教育领域，最先进的深度学习技术，亿万级语料库持续训练，业内领先的识别精度，英文已高达99%、中文高达90%左右，支持4000多种字体。'},
    {index:2,name:'C端应用',title:'机器学习',text:'自主研发的人工智能平台，算法丰富，搭载新一代分布式计算引擎，让机器具备超强的学习能力，助力校园从BI时代跨入AI时代。'},
]
// 产品内页  产品主要功能数据
const mainFunctionData = [
    {name:'数据产品',index:0,num:1,icon:require('@/assets/img/product/detail/icon_p1_1_1.png'),title:'区域职业教育大数据中心',text:'对区域内职业院校数据进行存储管理，同时对接与整合全国职业院校诊改数据管理平台和国家各类教育统计报表系统的数据，形成区域职业教育大数据中心。'},
    {name:'数据产品',index:0,num:2,icon:require('@/assets/img/product/detail/icon_p1_1_2.png'),title:'KPI决策分析系统',text:'根据国家、各省市对职业教育的相关要求，制定个性化KPI指标体系，对院校状态数据进行挖掘和统计分析，提供丰富的可视化展示，使教育行政管理者可实时动态观测各项关键指标，过程中预警干预，追溯数据源头，辅助决策。'},
    {name:'数据产品',index:0,num:3,icon:require('@/assets/img/product/detail/icon_p1_1_3.png'),title:'集约式数据采集',text:'省市级统一下发采集任务，院校填写基础数据，系统自动生成各类报告供院校下载，区县、市、省逐级审核，实现“数据一次采集，多表多处应用”，减轻院校数据填报工作量。'},
    {name:'数据产品',index:0,num:4,icon:require('@/assets/img/product/detail/icon_p1_1_4.png'),title:'专业质量监测',text:'对区域院校所开设的各个专业进行全方位监控。分析专业建设情况，关键指标预警提醒，实现区域专业排名，最终达到合理化设置和建设专业，优化资源投入。'},

    {name:'数据产品',index:1,num:1,icon:require('@/assets/img/product/detail/icon_p1_2_1.png'),title:'学校数据标准管理',text:'制定学校数据标准规范，数据中心对该标准规范进行动态管理。支持Oracle、Mysql、Sybase、SQLServer等主流关系型数据库数据。支持非结构化数据源配置，实现非结构化数据元数据管理。'},
    {name:'数据产品',index:1,num:2,icon:require('@/assets/img/product/detail/icon_p1_2_2.png'),title:'数据采集加工',text:'提供数据填报，数据治理，异常数据处理，以及工作流等功能模块。通过配置清洗、转换、加载等业务规则，实现伴随式数据采集。系统支持两种数据抽取策略，分别是全量抽取、增量抽取；系统支持字段映射、数据过滤、数据清洗、数据替换、数据计算、数据验证、数据加解密、数据合并、数据拆分等数据转换方式。'},
    {name:'数据产品',index:1,num:3,icon:require('@/assets/img/product/detail/icon_p1_2_3.png'),title:'数据质量管理',text:'全方位管理数据平台的数据质量，实现可定义的数据质量检核和维度分析以及问题跟踪。通过自定义巡检策略，验证数据是否合法，异常数据可以通过自动创建工单分配给数据源头处理，通过异常处理保证入库数据质量。'},
    {name:'数据产品',index:1,num:4,icon:require('@/assets/img/product/detail/icon_p2_1_4.png'),title:'信息资源目录',text:'按照国家、省市、学校要求，对教育资源进行归类，生成教育资源目录。提供资源目录看板，目录管理、订阅管理、资源分类等功能。'},
    {name:'数据产品',index:1,num:5,icon:require('@/assets/img/product/detail/icon_p1_2_5.png'),title:'数据共享开放',text:'提供数据上下行接口。通过上行接口，第三方系统可推送数据到数据中心，实现数据收集；通过下行接口，数据中心可对外提供数据，实现数据开放共享。'},
    
    {name:'数据产品',index:2,num:1,icon:require('@/assets/img/product/detail/icon_p1_3_1.png'),title:'业务需求及现有系统应用现状调研',text:'对相关业务部门、学校代表进行实地访谈及系统业务现状调研，形成调研纪要。了解单位整体业务模型，梳理现有的业务流程、管理制度、信息化现状、信息化建设三年规划和预算，充分了解并掌握区域教育信息化建设情况、目前存在的问题；形成《教育信息化应用建设需求初步调研报告》，并组织领导、专家及相关部门进行意见征听。'},
    {name:'数据产品',index:2,num:2,icon:require('@/assets/img/product/detail/icon_p1_3_2.png'),title:'区域教育数据标准',text:'结合《初步调研报告》对现有系统提出改进建议，组织领导、专家及相关部门进行充分地意见征听，形成《教育信息化管理数据标准（试行）》。结合《初步调研报告》对现有系统提出改进建议，组织领导、专家及相关部门进行充分地意见征听，形成《教育信息化管理数据标准（试行）》和《教育综合管理服务平台需求分析报告》。'},
    {name:'数据产品',index:2,num:3,icon:require('@/assets/img/product/detail/icon_p1_3_3.png'),title:'教育综合管理服务平台总体架构设计',text:'对教育综合管理服务平台进行总体架构和功能设计，形成《教育综合管理服务平台总体架构设计报告，作为技术发展路线图，并确定未来综合管理服务平台实施目标。根据未来综合管理服务平台的实施目标进行项目实施经费测算，形成《教育综合管理服务平台实施建议》，并组织领导、专家及相关部门进行意见征听。形成“教育综合管理服务平台”的整体建设方案，并组织领导、专家及相关部门进行意见征听。'},
    
    {name:'数据产品',index:3,num:1,icon:require('@/assets/img/product/detail/icon_p1_4_1.png'),title:'资源订阅',text:'系统以订阅的方式实现教育数据资源的共享开放，资源提供方提供可共享的数据资源，并形成可供订阅的资源目录。订阅者查看可订阅的资源目录，选择所需资源进行订阅。资源创建者审核订阅者申请，资源使用方通过目录方式获取资源信息后，通过平台提供的申请流程向平台管理者与资源拥有方进行申请，'},
    {name:'数据产品',index:3,num:2,icon:require('@/assets/img/product/detail/icon_p1_4_2.png'),title:'接口服务',text:'平台提供对外开放的数据接口，包括上行接口和下行接口。通过上行接口，第三方系统推送数据到教育大数据中心，实现数据收集；通过下行接口，教育大数据中心对外提供数据，实现数据开放共享。'},

    {name:'智慧校园',index:0,num:1,icon:require('@/assets/img/product/detail/icon_p2_1_1.png'),title:'教学管理',text:'通过一定的管理手段使教学活动达到学校既定的人才培养目标的过程。从教学计划阶段活动、教学运行过程管理到最后的教学质量评价，实现整体日常教学管理。从而协助学校规范专业、课程、教材和教学运行管理，为学校提供包含准确核心数据和信息的有效运行工具。'},
    {name:'智慧校园',index:0,num:2,icon:require('@/assets/img/product/detail/icon_p2_1_2.png'),title:'办公管理',text:'办公管理是教育机构日常管理中的重要组成部分，是教育电子政务与校务工作中的主要辅助手段。协同办公主要实现现代无纸化办公和电子公文的收发，提供规范化、流程化的日常办公条件。'},
    {name:'智慧校园',index:0,num:3,icon:require('@/assets/img/product/detail/icon_p2_1_3.png'),title:'顶岗实习管理',text:'顶岗实习管理以学校就业实习为中心，为学生顶岗实习工作提供实用的信息化管理手段。规范管理全省职业教育校外顶岗实习提供信息化支撑，协助完成学生顶岗相关的企业、时长、周期、课程等信息记录和统计，同时以标准化工具规范管理流程，协助落实教育部关于加强职业院校顶岗实习管理的相关规定和要求。'},
    {name:'智慧校园',index:0,num:4,icon:require('@/assets/img/product/detail/icon_p2_1_4.png'),title:'教科研管理',text:'以科研课题为主线，以经费管理为抓手，宏观把控教科研全生命周期管理，注重科研过程管控，实现科研活动的制度化、科学化管理，保证教科研计划圆满完成。'},

    {name:'智慧校园',index:1,num:1,icon:require('@/assets/img/product/detail/icon_p2_2_1.png'),title:'搭建基础平台，无缝对接国家数据平台',text:'搭建智慧校园基础平台，实现统一门户、统一身份认证，并将各业务管理系统采集、产生的数据汇聚到共享数据中心，并将共享数据中心的数据经过“数据转换、数据检测、数据处理”自动对接到教育部“中等职业学校人才培养工作状态数据采集与管理平台”，实现数据的一键校验和提交。'},
    {name:'智慧校园',index:1,num:2,icon:require('@/assets/img/product/detail/icon_p2_2_2.png'),title:'应用驱动，精细化智能化管理',text:'以教职工工作门户以及学生综合服务门户为基础，建设服务各类管理业务的信息系统，主要涵盖教学、学工、人事、后勤、资产、科研、招生、就业、督导、行政办公等功能。规范各类管理业务，实现数据实时采集，各类数据通过共享数据中心实现共享。'},
    {name:'智慧校园',index:1,num:3,icon:require('@/assets/img/product/detail/icon_p2_2_3.png'),title:'分析决策，构建内部质量保证体系',text:'在共享数据中心的基础上，以各种业务功能为应用核心，汇总形成各种协助规划决策和学校自主诊改的、以各种可视化方式展现的管理驾驶舱服务校本教育教学和管理，生成校情分析与诊断平台服务学校内部质量保证体系构建，最终实现与当前诊断与改进工作相匹配的智慧校园体系。'},

    {name:'智慧校园',index:2,num:1,icon:require('@/assets/img/product/detail/icon_p2_3_1.png'),title:'基础数据采集：数据仓库、开放共享',text:'数据采集任务分配到人，实现数据填报、校验审核、完整归档；汇聚各类数据，通过清洗、过滤，实现校内共享、校外开放；对接国家、省级系统，完成数据上报。'},
    {name:'智慧校园',index:2,num:2,icon:require('@/assets/img/product/detail/icon_p2_3_2.png'),title:'数据分析：让决策有据可依',text:'以可视化图形图表动态展现日常业务监测，使管理者可实时观测各项关键指标，过程中预警、过程中干预，辅助领导决策；掌握学校关键核心数据项、国家标准、同类平均、省平均、全国平均等，及时了解学校的指标满足程度和需要完善的地方。'},
    {name:'智慧校园',index:2,num:3,icon:require('@/assets/img/product/detail/icon_p2_3_3.png'),title:'“一表通”--解决数据多次采集和复用问题',text:'系统将采集的数据打散成原子数据，学校可自由组合不同报表；系统将采集的数据打散成原子数据，学校可自由组合不同报表；采用SAAS模式，学校可根据实际情况采购相关模块。'},
    {name:'智慧校园',index:2,num:4,icon:require('@/assets/img/product/detail/icon_p2_3_4.png'),title:'诊改任务管理：监控诊改工作状态',text:'帮助学校对诊改工作过程进行日常跟踪和管理，促使学校按照诊断项目标准开展诊改工作;通过诊断点加权打分计算，状态报告和可视化图表呈现学校诊改工作达成情况和完成趋势.'},

    {name:'智慧校园',index:3,num:1,icon:require('@/assets/img/product/detail/icon_p2_4_1.png'),title:'专业框架体系建设',text:'系统自带《中等职业学校专业目录》，帮助老师轻松打造科学的专业架构。统一的建设标准，教学质量更有保障，预设的专业建设模块，简单的鼠标级操作'},
    {name:'智慧校园',index:3,num:2,icon:require('@/assets/img/product/detail/icon_p2_4_2.png'),title:'精品课程建设与申报评审',text:'教师通过课程网站建设向导可迅速建立一个专业精品课程站点，大大减少教师的工作量。通过申报内容、评审指标、评价等级、分值权重的统一初始化设置，实现精品课程的建设、申报、评审、公示全过程的智能化管理。'},
    {name:'智慧校园',index:3,num:3,icon:require('@/assets/img/product/detail/icon_p2_4_3.png'),title:'教学资源建设',text:'系统可根据多样化的资源格式和资源类型进行资源数量统计，形成体系化的资源中心库。为全体教师、学生以及有需要的人员提供必要且丰富的学习资源。'},
    {name:'智慧校园',index:3,num:4,icon:require('@/assets/img/product/detail/icon_p2_4_4.png'),title:'师生互动',text:'师生互动主要是为了弥补网上教学缺乏互动性的缺陷，使教师和学生在互联网上也能够像面对面那样方便的交流。包括答疑管理，论坛管理，站点评论，虚拟实训，问卷调查等功能。'},
    
    
    {name:'质量管理',index:0,num:1,icon:require('@/assets/img/product/detail/icon_p3_1_1.png'),title:'基础质量保证',text:'统一数据标准，围绕学校、专业、课程、师资、学生层面建立质量指标体系，完成规范化管理和诊断改进的基本要求，生成自我诊断报告。'},
    {name:'质量管理',index:0,num:2,icon:require('@/assets/img/product/detail/icon_p3_1_2.png'),title:'质量评价管理',text:'集成学校业务管理系统，将质量评价融入日常管理，实现数据采集常态化，实现对质量的规范管理与监测反馈。'},
    {name:'质量管理',index:0,num:3,icon:require('@/assets/img/product/detail/icon_p3_1_3.png'),title:'智能采集分析',text:'提供移动终端采集通道，与智能设备联动，实现过程性数据实时采集、动态质量监测及预警分析，为学校人才培养质量的分析、判断及决策提供数据支撑。'},
    {name:'质量管理',index:0,num:4,icon:require('@/assets/img/product/detail/icon_p3_1_4.png'),title:'智慧决策建议',text:'基于大数据对学校质量深度挖掘与分析，发挥智能运算与推荐作用，融入专家级智慧，为诊断改进、质量提升实时提供专家级智慧建议。'},

    {name:'质量管理',index:1,num:1,icon:require('@/assets/img/product/detail/icon_p3_2_1.png'),title:'KPI指标体系',text:'学校可以根据实际需要构建个性化指标体系，满足教育部诊断改进、质量年报、督导评估等工作质量监测的要求，并通过与学校人才培养工作状态数据管理系统的无缝对接实现数据的源头采集，自动分析，实时监测，预警提醒。'},
    {name:'质量管理',index:1,num:2,icon:require('@/assets/img/product/detail/icon_p3_2_2.png'),title:'KPI指标查询',text:'学校校长、领导、评估专家可以通过系统查询所有已配置显示的KPI指标数据。展示层以网页的形式显示各项指标的仪表盘和数据列表，用户可以直观的了解到各项数据指标的具体情况。'},
    {name:'质量管理',index:1,num:3,icon:require('@/assets/img/product/detail/icon_p3_2_3.png'),title:'KPI指标配置管理',text:'项目实施人员或学校系统管理人员可以通过系统对要显示给领导、评估专家看的KPI指标进行灵活配置，实现自定义。其中还包括指标基本信息管理，指标因子管理，指标计算规则管理，评价标准管理。'},

    {name:'质量管理',index:2,num:1,icon:require('@/assets/img/product/detail/icon_p3_3_1.png'),title:'互动课堂',text:'互动课堂功能从实体课堂的课前、课中、课后为轴线，从教学设计、教学实施、教学反思等全流程信息化。提供PPT插件，与教师授课PPT课件无缝链接。'},
    {name:'质量管理',index:2,num:2,icon:require('@/assets/img/product/detail/icon_p3_3_2.png'),title:'授课资料管理功能',text:'教师可进行课程资料管理，建立课程文件标签，按课程章节结构分类管理；创建课程试题库，按课程章节结构分类管理。'},
    {name:'质量管理',index:2,num:3,icon:require('@/assets/img/product/detail/icon_p3_3_3.png'),title:'题库管理功能',text:'教学管理人员可按学期查阅课程的授课质量数据、课程的质量情况排行榜，并实现教学质量的全程监控，实时监测、预警提醒。'},

    {name:'质量管理',index:3,num:1,icon:require('@/assets/img/product/detail/icon_p3_4_1.png'),title:'汇总诊改目标与状态 计算达成度',text:'系统可以自动汇总诊改目标与状态，根据内置算法，计算学校诊改目标达成度，从而支持学校自我诊改的工作。'},
    {name:'质量管理',index:3,num:2,icon:require('@/assets/img/product/detail/icon_p3_4_2.png'),title:'自主设置诊断点、诊断要素与诊断大项权重，科学打分',text:'学校根据本校发展情况和诊改重点，可自行调节诊断项目权重，系统实现根绝用户实际需求进行诊断点、诊断要素与诊断大项权重的科学设置，从而进行更科学的打分。支持学校诊改工作。'},
    {name:'质量管理',index:3,num:3,icon:require('@/assets/img/product/detail/icon_p3_4_3.png'),title:'改进程度与效果可视化呈现',text:'数据表格和多种图表可视化呈现每次诊改周期中各诊断大项、诊断要素和诊断点的改进趋势。'},

    {name:'C端应用',index:0,num:1,icon:require('@/assets/img/product/detail/icon_p4_1_1.png'),title:'实名验证服务',text:'用户注册后，通过平台后台对接公安、工商、运营商、银行等机构进行实名认证。通过实名认证的信息，作为用户属性保存在用户资料夹中，根据用户授权出示给应用。通过两钟不同的方式验证实名后，可标示为实名用户。'},
    {name:'C端应用',index:0,num:2,icon:require('@/assets/img/product/detail/icon_p4_1_2.png'),title:'数据服务',text:'基于系统沉淀的数据开展大数据基础应用，如教育用户信用体系、教学质量分析、教师发展分析、学生综合分析等，提高教育决策的科学性和针对性，为教育管理涉及大量数据信息的梳理、分析与评判提供大数据服务。'},
    {name:'C端应用',index:0,num:3,icon:require('@/assets/img/product/detail/icon_p4_1_3.png'),title:'接入服务',text:'基于教育者身份提供各类场景接入接口，接入与之相匹配的应用服务及公共资源。应用服务涵盖教育相关的各类信息化产品，如培训、资格认证、师生画像等。公共资源包括旅游、交通、购物等产品，从而盘活公共资源，丰富师生的学习、生活。'},
    {name:'C端应用',index:0,num:4,icon:require('@/assets/img/product/detail/icon_p4_1_4.png'),title:'基础服务',text:'基于统一身份认证、统一门户入口，为用户提供各类基础服务，包括通知公告，通讯录、日程表、问卷调查、统一付费、请假管理、考勤打卡、点名签到等。'},
    {name:'C端应用',index:0,num:5,icon:require('@/assets/img/product/detail/icon_p4_1_5.png'),title:'PKI（Public Key Infrastructure）服务',text:'平台通过OPENAPI的方式，为用户／应用提供签名验证、时间戳、VPN等PKI服务数字证书在线服务。'},
    {name:'C端应用',index:0,num:6,icon:require('@/assets/img/product/detail/icon_p4_1_6.png'),title:'统一认证登录',text:'系统支持多种认证方式，包括数字证书、EID认证、账号口令认证以及手机扫一扫、快捷认证。'},

    {name:'C端应用',index:1,num:1,icon:require('@/assets/img/product/detail/icon_p4_2_1.png'),title:'评价数据标准规范',text:'统一区域学生综合素质评价标准，建立学生综合素质“银行”。遵循区域教育信息系统基础数据标准，整理形成基础数据标准规范，用于学生基础数据库的数据结构设计和使用。'},
    {name:'C端应用',index:1,num:2,icon:require('@/assets/img/product/detail/icon_p4_2_2.png'),title:'学生各类数据采集',text:'学生数据分为客观表现类数据和主观评价类数据，数据采集统一通过任务管理的方式分解给相关干系人采集。客观类数据直接进行数据采集填报，主观类数据通过评价量表进行反馈。'},
    {name:'C端应用',index:1,num:3,icon:require('@/assets/img/product/detail/icon_p4_2_3.png'),title:'生成综合素质报告单',text:'系统预置数据分析模型，该模型融合学生客观表现类数据和主观评价类数据，最终生成学生综合素质评价报告。报告单类似于学生画像，对学生进行全面的展示。'},

    {name:'C端应用',index:2,num:1,icon:require('@/assets/img/product/detail/icon_p4_3_1.png'),title:'错题本',text:'错题本实现纸质和电子错题本的双向转换，通过OCR技术，对纸质错题进行识别，转换成电子错题本，电子错题本通过“一键打印”功能可输出成纸质错题本。'},
    {name:'C端应用',index:2,num:2,icon:require('@/assets/img/product/detail/icon_p4_3_2.png'),title:'智慧题库',text:'从出版社、学校和互联网等采集习题形成题库，利用大数据和机器学习技术，结合学生的行为数据，对题库进行训练和学习。'},
    {name:'C端应用',index:2,num:3,icon:require('@/assets/img/product/detail/icon_p4_3_3.png'),title:'个性化学习',text:'系统会对学生日常的练习、测评等行为数据进行采集和分析，向学生推荐个性化的学习方案。'},
    {name:'C端应用',index:2,num:4,icon:require('@/assets/img/product/detail/icon_p4_3_4.png'),title:'大数据分析',text:'学校和教育管理部门可进行班级分析、年级分析、学校分析和区域分析等，对教学质量进行分析评估。'},
]
// 产品内页 产品案例数据
const wrap = '<br>&emsp;&emsp;'
const caseData = [
    {name:'数据产品',index:0,img:require('@/assets/img/product/product_bg5.jpg'),title:'广西职业院校内部质量保证体系诊断与改进管理平台',text:'按照教育部关于全国职业院校教学诊断与改进工作要求，兼顾广西自治区诊改实施工作个性化需求与职业教育管理特色，建设广西职业院校诊改管理平台，实现自治区教育厅对全区职业教育实时数据管理与服务。以数据为基础实现从基于“经验”和“标准”走向基于动态过程、真实性、个性化的质量管理。平台通过自治区职业院校人才培养工作状态数据的自动采集、分析校验以及分层分类管理，实现自治区、地市、校端三级数据采集上报、监测预警和质量分析，为强化教育行政部门对自治区职业教育的管理和深入推进全自治区职业院校诊改工作提供高效的平台支撑，帮助自治区教育厅全面掌握区域职业教育的详实情况、分析质量状态，有利于科学地制定区域职教政策与发展方向。'},

    {name:'数据产品',index:1,img:require('@/assets/img/product/detail/pic_p1_2_1.jpg'),title:'天津市第一商业学校校本数据中心',text:'学校校本数据中心建设包括数据治理服务和数据中心软件平台。通过数据治理，形成学校基础数据标准、基础数据库、诊改数据标准库以及数据对接和接口规范，确保原有系统在学校完善的数据体系下良好运行和数据规范入库；建立校本数据中心软件平台，对学校现有各业务系统进行全面的整合，使各系统的数据能互通互联、校本共用，达到数据“一次采集、处处使用”的效果；同时消除数据重复采集的现象，减轻学校上报各种报表的负担；并逐步解决数据不一致、统计不准确的问题。'},

    {name:'数据产品',index:2,img:require('@/assets/img/product/detail/pic_p1_3_1.jpg'),title:'《上海中等职业教育信息化管理数据标准（试行）》咨询服务',text:`上海市教委于2017年年底启动“上海中等职业教育综合管理服务平台”建设规划咨询服务项目，其中一项任务是梳理形成规范统一的数据标准，建立一套基础数据标准库《上海中等职业教育信息化管理数据标准（试行）》，用于上海市中等职业教育基础数据库的数据结构设计和使用。${wrap}该标准以《JY/T 1001—2012 教育管理信息  教育管理基础代码》《JY/T 1002—2012 教育管理信息 教育管理基础信息》《JY/T 1005—2012教育管理信息 中职学校管理信息》《JY/T 1003—2012教育管理信息 教育行政管理信息》为主要基础，结合中等职业学校教学诊断与改进工作配套的中等职业学校人才培养工作状态数据管理系统的数据标准（2017版）、上海市教育信息化标准（2017版送审稿）和教育部、上海市提出的数据对接标准要求，根据上海实际情况制定。${wrap}该标准将作为职教处重要信息化工作文件的附件下发中职学校，并作为本市中职学校进行信息化建设的数据标准参考。`},

    {name:'数据产品',index:3,img:require('@/assets/img/product/detail/pic_p1_4_1.jpg'),title:'上海中等职业教育市级中职系统数据整合',text:`为贯彻落实《上海市中职教育信息化 2.0 行动计划（2018-2022）》的统一数据管理工程，上海市教委信息中心于2018年立项“教育数据统一管理项目”，重点实现学校数据按照全市统一标准上送市级中职数据中心，实现全市中职数据整合与自动比对。实现中职学校的核心数据采集，对数据进行清洗、转换、整合、比对等处理，最终加载到市级中职数据中心。为全市中职业务融通和数据共享提供保障，是深层次数据挖掘的基础。`},
    // {name:'数据产品',index:2,img:require('@/assets/img/product/detail/pic_p1_2_1.jpg'),title:'数据标准合理性的验证服务',text:'分析对比学校系统与市级系统的数据差异，验证《上海市中等职业教育信息化管理数据标准（试行）》的编制合理性，并做适应性修订。'},
    // {name:'数据产品',index:2,img:require('@/assets/img/product/detail/pic_p1_2_1.jpg'),title:'学校端数据接口对接服务',text:'提供学校端数据接口服务，为学校数据接入市级中职数据中心提供服务支持。支持学校通过API将指定数据通过接口服务将数据暂存，并实现向市级中职数据中心的上报。提供数据上报状态的监测功能，实现数据上报情况查询与统计。数据接口须符合经过适应性修订后的《上海市中等职业教育信息化管理数据标准（试行）》，符合该标准的数据可全部通过接口进行收集、校验、稽核。'},
    // {name:'数据产品',index:2,img:require('@/assets/img/product/detail/pic_p1_2_1.jpg'),title:'市级数据接收处理服务',text:'构建安全可靠的上海市中职数据接收服务通道，实现与学校端数据接口的数据传输和交换。可实现报送学校的集中管理、数据采集通道的开启与关闭、数据采集任务指派、数据接口集中管理与下发、数据采集标准的统一管理、数据传输过程监测、数据传输密钥的管理与分发、数据传输结果统计查询。'},

    {name:'智慧校园',index:0,img:require('@/assets/img/product/detail/pic_p2_1_1.jpg'),title:'天津市第一轻工业学校综合管理平台',text:'学校通过系统实现学校内部各业务线管理工作的电子化、信息化，构建了统一的各部门协同工作系统。学校业务管理人员摆脱了人工操作与管理，学生可以及时了解自己的在校情况、学习情况、就业情况等信息，并可以参与学校的学生网上选课、学生评价老师等活动，教师可以通过系统完成例如上传教案、网上录入成绩等日常工作，班主任了解学生违纪情况加强学生管理，实习指导老师实现对顶岗实习学生状况跟踪，学校领导通过系统掌握学校关键指标情况、综合分析事业部门、各业务线的工作进度，实现了及时掌握全校的运行状态，辅助领导对校园事物进行决策分析。'},
    {name:'智慧校园',index:1,img:require('@/assets/img/product/detail/pic_p2_2_1.jpg'),title:'上海交通职业技术学院智能校园管理系统',text:'以教育部《职业院校数字校园建设规范》为指导，建设涵盖学校教学管理、学工管理、人事管理、后勤管理、资产管理、科研管理、实验管理、招生管理、就业管理、督导管理、行政办公管理等业务系统的综合管理平台，提供服务师生的各类信息化管理应用，在规范学校各类管理业务的同时，大大提高整个学校的管理效率，并对系统中存在的资源进行了动态监控和分析诊断，以持续地改善学校的教育教学和管理机制，加快学校实现教育信息化、决策科学化和管理规范化，提升学校人才培养质量，满足学校智慧校园建设的实际需求。'},
    {name:'智慧校园',index:2,img:require('@/assets/img/product/detail/pic_p2_3_1.jpg'),title:'江苏省中等职业学校管理信息系统',text:'搭建江苏省中等职业学校校端版信息管理系统，服务全省中职学校，以信息化为抓手帮助学校提升专业设置与发展、教学质量内涵、实习实训、就业质量，服务于产业结构和从区域经济角度出发的专业人才培养质量。观测学生学业水平发展和综合素质、教师教学能力和个人发展、专业和课程运行规范和均衡发展、产教融合和校企合作质量、以及中职适应社会经济发展能力等问题，最终实现全省职业学校日常监测体系，实现大数据支撑下的人才培养质量提升。'},
    {name:'智慧校园',index:3,img:require('@/assets/img/product/detail/pic_p2_4_1.jpg'),title:'上海市交通学校专业资源中心',text:'上海市交通学校为了建设市级重点专业和其他专业，选用了专业教学资源中心软件，进行全校专业体系建设以及每个专业的课程、师资团队、实验实训、资源建设，学生可以基于专业进行学习。同时，该软件与学校原有教学互动中心实现了无缝连接，专业与课程的资源能够随时调用。'},
    // 成果案例待补充
    // {name:'智慧校园',index:3,img:require('@/assets/img/product/detail/pic_p2_3_1.jpg'),title:'江苏省中等职业学校管理信息系统',text:'搭建江苏省中等职业学校校端版信息管理系统，服务全省中职学校，以信息化为抓手帮助学校提升专业设置与发展、教学质量内涵、实习实训、就业质量，服务于产业结构和从区域经济角度出发的专业人才培养质量。观测学生学业水平发展和综合素质、教师教学能力和个人发展、专业和课程运行规范和均衡发展、产教融合和校企合作质量、以及中职适应社会经济发展能力等问题，最终实现全省职业学校日常监测体系，实现大数据支撑下的人才培养质量提升。'},

    {name:'质量管理',index:0,img:require('@/assets/img/product/detail/pic_p3_2_1.jpg'),title:'上海市贸易学校人才培养质量监测系统',text:'建立学校人才培养质量监测系统，通过对专业发展水平、教师综合能力、学生综合素质三个层面的业务管理过程进行全方位、多维度的质量监控，通过数据抽取与清洗、大数据分析、专家建模、数据智能拟合、多样化的数据图形图表呈现等技术手段，形成学校管理状态“大数据”及相关数据分析，分析结果以多维角度进行可视化呈现，最终生成各类数据分析和质量分析报告，为学校开展诊断与改进、质量年报、督导评估、各类专项工作提供决策依据，引导学校以提高人才培养质量为核心，建立教育质量监控反馈机制，为学校人才培养质量的分析、判断及决策提供数据支撑、监测预警和反馈建议。'},
    {name:'质量管理',index:1,img:require('@/assets/img/product/detail/pic_p3_1_1.jpg'),title:'上海市商贸旅游学校KPI决策分析系统',text:'KPI决策分析系统以学校各业务系统的数据为基础，对学校状态数据进行挖掘，将日常管理数据以管理仪表方式动态展示出来进行统计分析，使学校管理者可以实时动态观测各项数据，过程中预警、过程中干预，使得学校所有数据可以追溯源头，查出原因，并可以在一线解决，达成监测质量、提升质量的目标。'},
    {name:'质量管理',index:2,img:require('@/assets/img/product/detail/pic_p3_3_1.jpg'),title:'广西工业职业技术学院',text:'学院课堂教学质量监测平台目前适用于全校学生的辅助学习、教师辅助教学的交互式教与学活动。支撑成都航空职业技术学院开展课堂教学、在线备课、互动课堂、教学资源建设等涉及课前、课中、课后的教学实施全过程。平台提供在线教学质量数据分析功能，支持学校课堂教学质量的提升，提升了学校在课程建设、专业建设、信息化课堂教学、教学质量管理等方面的综合质量和水平。'},
    {name:'质量管理',index:3,img:require('@/assets/img/product/detail/pic_p3_4_1.jpg'),title:'重庆市九龙坡职业教育中心',text:'教学工作诊断与改进是全国中等职业学校将要长期开展的常态化、周期性工作，学校基于状态数据管理系统采集的数据，对学校、专业、课程、教师、学生多层面，以及教学、资源、服务、管理等多维度进行质量管理与监控。诊改工作涉及数据与项目繁多，诊断方式复杂，针对中职学校教学诊断与改进工作，以教学工作诊断与改进“八步循序”法作为指导，利用该平台对诊改工作过程进行有效管理，促使学校能够按照诊断项目标准开展诊改工作，对诊改工作状态进行日常管理、跟进。'},

    // 暂缺
    {name:'C端应用',index:0,img:require('@/assets/img/product/detail/pic_p4_1_1.jpg'),title:'来宾市基于教育可信电子证的教育大数据平台',text:'以教育部可信身份认证为核心，实现教育相关信息化的集中认证，统一门户集成，解决系统分散、多重登录、以及实名认证的问题，保证数据的上下贯通。以”开放”为核心思想，以”合作与共赢”为建设理念，为第三方接入平台提供一站式、规范、标准化的开放能力服务。接入各类服务及公共资源，实现平台的自我造血，丰富师生的学习与生活，方便师生享受国家提供的各类优惠，比如景点打折、火车票打折等。汇聚师生学习、工作、生活轨迹数据，形成教育大数据中心，挖掘数据价值，辅助决策。'},
    {name:'C端应用',index:1,img:require('@/assets/img/product/detail/pic_p4_2_1.jpg'),title:'重庆市中职学生综合素质评价系统',text:'按照《重庆市教育资源公共服务平台工作方案》要求，中等职业学校学生综合素质评价平台是重庆市职业教育资源公共服务平台的重要组成部分。重庆市依托重庆市教育评估院于2012年起对学生综合素质评价进行了系统研究，多年的研究积累为搭建学生综合素质评价系统提供了理论和实践基础。统一全市学生综评标准，建立学生综合素质“银行”，系统基于学生、教师的应用管理挖掘、采集和分析学生在校期间的德育情况、技能情况以及身心健康等过程中产生的数据，进行关键数据质量监测，让数据服务于学生终身发展，服务于学校内涵建设。'},
    {name:'C端应用',index:2,img:require('@/assets/img/product/detail/pic_p4_3_1.jpg'),title:'K12自适应学习平台',text:'为中小学生提供错题册和在线测评服务，为老师提供课堂教学质量测评服务，为学校管理部门和教育行政部门提供学生、老师、班级、学校、区域教学质量等大数据分析服务。'},

]
export {titleData,picData,specialData,mainFunctionData,caseData};