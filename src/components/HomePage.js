import React from 'react'

function HomePage() {
  return (
    <main>

      <header className="homePage-hero">

        <div className="homePage-content">
          <h1>Project X</h1>
          <p>A place where we will be able to rebuild and finesse and smile</p>
        </div>

      </header>

      <section className="section-one">
        <header className="section-header">
          <h2>So what is this?</h2>
          <p>
            Basically what I am trying to create here is a website for us.. A website where we can learn a little bit and addon to it and basically make something decent out of it. Hopefully sooner or later implement so more type of features and upgrade it towards a little social + blockchain developement behind it.
          </p>
        </header>

        <div className="section-content">
          <p>
            There are going to be at least 3 key features that I am going to try and implement so that way we can make this year kinda of and basically our year in a way. I want us to be succussful and with that to come there is going to be a few things that we need to do or get started with. But hopefully youre little gift that you recieve will explain more of it.
          </p>

          <div className="section-container">

            <div className="objective objective-one">

              <div className="objective-image-container">
                  <img src="../img/coding.jpg" alt="objective one" />
              </div>
              <ul>
                <li>Coding
                  <ul>
                    <li>Learn <strong>HTML + CSS</strong></li>
                    <li>Learn <strong>Javascript</strong></li>
                    <li>Learn <strong>Python</strong></li>
                  </ul>
                </li>
              </ul>

            </div>

            <div className="objective objective-two">
              <div className="objective-image-container">
                  <img src="../img/growing-seed.jpg" alt="objective two" />
              </div>
              <ul>
                <li>
                  Growing
                  <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Youtube</li>
                    <li>Reddit?!?</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="objective objective-three">
              <div className="objective-image-container">
                  <img src="../img/passive-income.jpg" alt="objective two" />
              </div>
              <ul>
                <li>
                  Passive Income
                  <ul>
                    <li>Crypto</li>
                    <li>Stock + Investment</li>
                    <li>Buisness</li>
                  </ul>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </section>


    </main>
  )
}

export default HomePage
