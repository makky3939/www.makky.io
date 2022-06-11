import fetch from 'isomorphic-unfetch'
import parser from 'fast-xml-parser'
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Navbar, NavbarBrand } from 'reactstrap'
import Layout from '../components/layout'
import bibtexParse from '@orcid/bibtex-parse-js'
import fs from 'fs'


const PublicationPages = ({ pages }) => {
  if (pages === undefined) {
    return (<span></span>)
  }
  if (pages.includes('pages')) {
    return (
      <span>{ pages }</span>
    )
  } else {
    return (
      <span>p. { pages }</span>
    )
  }
}


const PublicationOthers = ({ url }) => {
  if (url) {
    return (
      <span>
        [<a href={url} target="_blank">PDF</a>]
      </span>
    )
  } else {
    return (<span></span>)
  }
}


const Publication = ({ bibitem }) => {
  if (bibitem.entryType == 'article') {
    return (
      <div>
        {bibitem.entryTags.author}
        <span>. </span>
        <b>{bibitem.entryTags.title}</b>
        <span>. </span>
        {`${bibitem.entryTags.journal} (${bibitem.entryTags.volume}:${bibitem.entryTags.number})`}
        <span>. </span>
        {bibitem.entryTags.year}
        <span>, </span>
        <PublicationPages pages={bibitem.entryTags.pages} />
        <span>. </span>
        <PublicationOthers url={bibitem.entryTags.url} />
      </div>
    )
  } else if (bibitem.entryType == 'inproceedings') {
    return (
      <div>
        {bibitem.entryTags.author}
        <span>. </span>
        <b>{bibitem.entryTags.title}</b>
        <span>. </span>
        {bibitem.entryTags.booktitle}
        <span>. </span>
        {bibitem.entryTags.location}
        <span>, </span>
        {bibitem.entryTags.year}
        <span>, </span>
        <PublicationPages pages={bibitem.entryTags.pages} />
        <span>. </span>
        <PublicationOthers url={bibitem.entryTags.url} />
      </div>
    )
  }
};


const researchGrants = [
  {
    "text": "AIP Challenge Program, JST AIP Network Lab, Japan. 1,000,000 JPY, June 2021 - March 2022."
  },
  {
    "text": "AIP Challenge Program, JST AIP Network Lab, Japan. 1,000,000 JPY, August 2020 - March 2021."
  },
  {
    "text": "AIP Challenge Program, JST AIP Network Lab, Japan. 1,000,000 JPY, August 2019 - March 2020."
  }
];

const teachingExperience = [
  {
    "title": "Teaching Assistant, Information Media Laboratory, University of Tsukuba. April 2021 - August 2021."
  },
  {
    "title": "Teaching Assistant, Database Technology, University of Tsukuba. October 2020 - December 2020."
  },
  {
    "title": "Teaching Assistant, Information Media Laboratory, University of Tsukuba. April 2020 - July 2020."
  },
  {
    "title": "Teaching Assistant, Introduction to Data Engineering, University of Tsukuba. April 2020 - July 2020."
  },
  {
    "title": "Teaching Assistant, Database Technology, University of Tsukuba. October 2019 - December 2019."
  },
  {
    "title": "Teaching Assistant, Introduction to Data Engineering, University of Tsukuba. April 2019 - July 2019."
  },
  {
    "title": "Teaching Assistant, Database Technology, University of Tsukuba. October 2018 - December 2018."
  },
  {
    "title": "Teaching Assistant, Introduction to Data Engineering, University of Tsukuba. April 2018 - July 2018."
  }
]

const workExperience = [
  {
    "title": "Research Assistant, University of Tsukuba, Japan. April 2019 - March 2022.",
    "_comment": "As a Member of the JST CREST https://www.dl.soc.i.kyoto-u.ac.jp/system/wp-content/uploads/2019/03/hcompWS18www.pdf CyborgCrowd Project. It is a Japanese funded research project to integrate crowdsourcing and AI technologies."
  },
  {
    "title": "Engineer (Part-time), Preferred Networks, Inc. October 2017 - March 2022."
  },
  {
    "title": "Engineer (Part-time), Bit Journey, Inc. October 2017 - May 2020"
  },
  {
    "title": "Intern, Arm Treasure Data inc. August 2018 - September 2018"
  },
  {
    "title": "Intern, Preferred Networks, Inc. August 2017 - September 2017"
  },
  {
    "title": "Engineer (Part-time), LINE Corporation. April 2016"
  },
  {
    "title": "Intern, CyberAgent inc. September 2015"
  },
  {
    "title": "Intern, National Institute of Informatics, Japan. August 2015"
  },
  {
    "title": "Intern, pixiv inc. March 2015"
  },
  {
    "title": "Engineer (Part-time), 3-shake inc. July 2016 - August 2017"
  },
  {
    "title": "Engineer (Part-time), BearTail inc. May 2014 - March 2015"
  },
  {
    "title": "Engineer (Part-time), Has-key, inc. August 2013 - March 2017"
  },
]

const awards = [
  {
    "title": "筑波大学 図書館情報メディア研究科 研究科長表彰, 2022-03-25"
  },
  {
    "title": "第13回データ工学と情報マネジメントに関するフォーラム (DEIM2021), 優秀論文賞, 2021-06-24"
  },
  {
    "title": "第13回データ工学と情報マネジメントに関するフォーラム (DEIM2021), 学生プレゼンテーション賞, 2021-03-03"
  },
  {
    "title": "第12回データ工学と情報マネジメントに関するフォーラム (DEIM2020), オンラインプレゼンテーション賞, 2020-03-03"
  },
  {
    "title": "WebDB Forum 2019, 口頭発表 企業賞 (株式会社LIFULL賞, 株式会社FRONTEO賞), 2019-09-09"
  },
  {
    "title": "日本学生支援機構 特に優れた業績による奨学金返還免除 (全額), 2019年5月"
  },
  {
    "title": "筑波大学 図書館情報メディア研究科 研究科長表彰, 2019-03"
  },
  {
    "title": "ワーカの成長を考慮した自己補正マイクロタスク割当て手法，第9回データ工学と情報マネジメントに関するフォーラム，学生プレゼンテーション賞"
  },
  {
    "title": "EscapeGoat:筑波大学 情報学群 知識情報・図書館学類生向けの卒業判定アプリ，株式会社ハシゴ Gitソースコンテスト2016，銅賞"
  },
  {
    "title": "pixiv 2015 SPRING BOOT CAMP，準優勝"
  },
  {
    "title": "震災について考えるサイト，第15回 全日本中学高校Webコンテスト ThinkQuest JAPAN，プラチナ賞 (Yahoo!基金特別賞)"
  },
  {
    "title": "Google StreetViewを用いた図書情報システムの開発，第9回 北関東３県工業高校生徒研究発表大会，最優秀賞"
  },
  {
    "title": "Google StreetViewを用いた図書情報システムの開発，第64回 生徒研究発表会，最優秀賞"
  },
  {
    "title": "Google StreetViewを用いた図書情報システムの開発，第２回 立命館・全国高校生ソフトウェア創作コンテスト ICT Challenge+R 2012，最優秀賞"
  },
]

const Index = ({ recentBlogPosts, publicationList }) => (
  <Layout>
    <article>
      <Navbar expand="md" fixed="top" light>
        <Container>
          <NavbarBrand href="/">
            <span>www.</span>
            <b>makky</b>
            <span>.io</span>
          </NavbarBrand>
        </Container>
      </Navbar>
    
      <div className="bg-jumbotron">
        <Container>
          <Row className="justify-content-center">
            <Col lg="6" md="10" className="my-5 py-5">
              <Card className="my-5">
                <CardBody>
                  <CardTitle>
                    <h4>
                      <b>Masaki Kobayashi</b>
                    </h4>
                  </CardTitle>
                  <hr />
                  <CardText>
                    Doctoral student at University of Tsukuba
                    <br />
                    (Graduate School of Library, Information and Media Studies)
                  </CardText>
                  <dl>
                    <dt>Research Topics:</dt>
                    <dd>
                      Human Computation, Crowdsourcing, Human-AI Collaboration
                    </dd>
                    <dt>Interests:</dt>
                    <dd>
                      Front-end Web, Site Reliability Engineering, Photography
                    </dd>
                    <dt>Links:</dt>
                    <dd>
                      <a href="/cv_masaki_kobayashi_20200309.pdf" target="_blank">CV</a>
                      {', '}
                      <a href="https://blog.makky.io/" target="_blank">blog.makky.io</a>
                      {', '}
                      <a href="https://github.com/makky3939" target="_blank">GitHub</a>
                      {', '}
                      <a href="https://speakerdeck.com/makky" target="_blank">SpeakerDeck</a>
                      <br />
                      <a href="https://scholar.google.com/citations?user=6jE4oTYAAAAJ" target="_blank">Google Scholar</a>
                      {', '}
                      <a href="https://www.amazon.jp/hz/wishlist/ls/FOZWIXJAQW3C?ref_=wl_share" target="_blank">Wishlist</a>
                      {', '}
                      <a href="https://www.slideshare.net/masakikobayashi1485" target="_blank">SlideShare (inactive)</a>
                    </dd>
                  </dl>
                </CardBody>
              </Card>

            </Col>
          </Row>
        </Container>
      </div>

      <section>
        <Container className="my-5 py-5">
          <Row className="justify-content-center">
            <Col lg="8" md="10">
            <h3 className="pb-3">Hello,</h3>
              <p>
                I am a doctoral student at the Graduate School of Library, Information and Media Studies, University of Tsukuba.
                My current research interest is Human-Machine collaboration in Crowdsourcing for efficient microtask processing.
              </p>
              <p>
                I am also interested in developing web applications and, I am fluent in JavaScript, TypeScript, Ruby, and Python.
                I have experienced as a part-time engineer and an intern in more than ten companies and research institutions.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" md="10" className="my-5 py-5">
              <h3 className="pb-3">Recent Blog Posts</h3>
              <ul>
                {
                  recentBlogPosts.map((bp, index) => {
                    return (
                      <li key={index}>
                        <a href={bp["link"]} target="_blank">{bp["title"]}</a>
                      </li>
                    )
                  })
                }
              </ul>
              <small>View all blog posts on <a href="https://blog.makky.io/" target="_blank">blog.makky.io</a>.</small>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="justify-content-center pb-4">
            <Col lg="10" md="12" className="mt-5 pt-5">
              <h3 className="pb-3">Publications</h3>
              <ul>
                {
                  publicationList.map((bibitem, index) => {
                    return <li key={index}><Publication bibitem={bibitem} /></li>
                  })
                }
              </ul>
            </Col>
          </Row>

          <Row className="justify-content-center pb-4">
            <Col lg="10" md="12">
              <h3 className="pb-3">Work Experience</h3>
              <ul>
                {
                  workExperience.map((we, index) => {
                    return <li key={index}>{we.title}</li>
                  })
                }
              </ul>
            </Col>
          </Row>

          <Row className="justify-content-center pb-4">
            <Col lg="10" md="12">
              <h3 className="pb-3">Teaching Experience</h3>
              <ul>
                {
                  teachingExperience.map((te, index) => {
                    return <li key={index}>{te.title}</li>
                  })
                }
              </ul>
            </Col>
          </Row>

          <Row className="justify-content-center pb-4">
            <Col lg="10" md="12">
              <h3 className="pb-3">
                Research Grants
              </h3>
              <ul>
                {
                  researchGrants.map((rg, index) => {
                    return (<li key={index}>{rg.text}</li>)
                  })
                }
              </ul>
            </Col>
          </Row>

          <Row className="justify-content-center pb-4">
            <Col lg="10" md="12">
              <h3 className="pb-3">
                Awards
              </h3>
              <ul>
                {
                  awards.map((aw, index) => {
                    return (<li key={index}>{aw.title}</li>)
                  })
                }
              </ul>
            </Col>
          </Row>

          <Row className="justify-content-center pb-4">
            <Col lg="10" md="12">
              <h3 className="pb-3">
                Patents
              </h3>
              <ul>
                <li>森嶋 厚行, 若林 啓, 小林 正樹. 割当装置及び割当方法. 特願2019-035829.</li>
              </ul>
            </Col>
          </Row>

          <Row className="justify-content-center pb-4">
            <Col lg="10" md="12" className="mb-5 pb-5">
              <h3 className="pb-3">
                Others
              </h3>
              <ul>
                <li>インタビュー記事: ヒトとAIのタッグが世界を救う⁉―「融合知能」で世界的課題に立ち向かう― - 筑波大学 PhD×FUTURE. [<a href="https://syushoku.sec.tsukuba.ac.jp/phd-future/?topics=%e3%83%92%e3%83%88%e3%81%a8ai%e3%81%ae%e3%82%bf%e3%83%83%e3%82%b0%e3%81%8c%e4%b8%96%e7%95%8c%e3%82%92%e6%95%91%e3%81%86%e2%81%89%e2%80%95%e3%80%8c%e8%9e%8d%e5%90%88%e7%9f%a5%e8%83%bd%e3%80%8d%e3%81%a7" target='_brank'>link</a>]</li>
                <li>The Thirty-Fifth AAAI Conference on Artificial Intelligence (AAAI 2021), Student volunteer staff</li>
                <li>The 40th International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR 2017), Student volunteer staff</li>
                <li>IPA セキュリティキャンプ2013 全国大会 Webセキュリティクラス修了</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>



      <section>
        <Container>
          <Row className="justify-content-center">
            <Col lg="10" md="12" className="my-5 py-5">
              <h3>Photographs</h3>
              <Row>
                {
                  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x, i) => {
                    return (
                      <Col key={i} lg="4" md="4" sm="6" className="my-3">
                        <img className="rounded img-fluid" src={require(`./images/photographs/2016/${x}.jpg`)} />
                        {/* <div
                          className="rounded thumbnail-16x10"
                          // style={{"backgroundImage": require(`./images/photographs/2016/${x}.jpg`)}}

                          style={{"backgroundImage": `url(./images/photographs/2016/${x}.jpg))`}}
                        /> */}
                      </Col>
                    )
                  })
                }
                {/* {
                  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((x, i) => {
                    return (
                      <Col lg="4" md="4" className="my-3">
                        <img width="100%" height="auto" className="rounded" src={`/photographs/2017/${x}.jpg`} />
                      </Col>
                    )
                  })
                } */}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="justify-content-center">
            <Col lg="10" md="12" className="my-5 py-5">
              <h3>Past Projects</h3>
              <Row>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/mind_project_2.png`)} />
                </Col>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/mind_project.png`)} />
                </Col>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/ldaboard_1.png`)} />
                </Col>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/self_correction_2.png`)} />
                </Col>
                {/* <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/self_correction_1.png`)} />
                </Col> */}
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/chainerui_1.png`)} />
                </Col>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/escapegoat_1.png`)} />
                </Col>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/emotional_palette.png`)} />
                </Col>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/kasuga14_freshman.png`)} />
                </Col>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/klis_setumeikai.png`)} />
                </Col>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/home_makky_io.png`)} />
                </Col>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/makky_io_2015.png`)} />
                </Col>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/media_art_hounted_house.png`)} />
                </Col>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/visubus.png`)} />
                </Col>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/beef_clicker.png`)} />
                </Col>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/housyasen.png`)} />
                </Col>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/zishin.png`)} />
                </Col>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/shinsai.png`)} />
                </Col>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/librarysearch_1.png`)} />
                </Col>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <img className="rounded img-fluid border" src={require(`./images/portfolio/mito_th.png`)} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>



      <div className="bg-dark text-white py-3">
        <Container>
          <Row>
            <Col md="10">
              <p className="my-0">
                <small>&copy; makky.io All Rights Reserved.</small>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </article>
  </Layout>
)

Index.getInitialProps = async ctx => {
  const bibtex_text = fs.readFileSync('./pages/bibliography.bib').toString()
  const publicationList = bibtexParse.toJSON(bibtex_text)
  // console.log(publicationList)

  const res = await fetch('https://blog.makky.io/feed.xml')
  const text = await res.text()
  const xml = parser.parse(text)

  const posts = xml["rss"]["channel"]["item"]
  const recentBlogPosts = posts.slice(0, 3)
  // console.log(recentBlogPosts)
  return { recentBlogPosts, publicationList }
}

export default Index
