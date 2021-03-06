describe('Main page flow', () => {
    
        let interceptData;

        beforeEach(() => {

            interceptData = {
                "Similar": {
                    "Info": [
                    {
                    "Name": "The Beatles",
                    "Type": "music",
                    "wTeaser": "The Beatles were an English rock band formed in Liverpool in 1960, whose best-known line-up comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the most influential band of all time and were integral to the development of 1960s counterculture and popular music's recognition as an art form. Rooted in skiffle, beat and 1950s rock and roll, their sound incorporated elements of classical music and traditional pop in innovative ways; the band later explored music styles ranging from ballads and Indian music to psychedelia and hard rock. As pioneers in recording, songwriting and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often publicised as leaders of the era's youth and sociocultural movements.",
                    "wUrl": "http://en.wikipedia.org/wiki/The_Beatles",
                    "yUrl": "https://www.youtube-nocookie.com/embed/NCtzkaL2t_Y",
                    "yID": "NCtzkaL2t_Y"
                    }
                    ],
                    "Results": [
                    {
                    "Name": "The Rolling Stones",
                    "Type": "music",
                    "wTeaser": "The Rolling Stones are an English rock band formed in London in 1962. Active for almost six decades, they are one of the most popular and enduring bands of the rock era. In the early 1960s, the Rolling Stones pioneered the gritty, heavier-driven sound that came to define hard rock. Their first stable line-up comprised vocalist Mick Jagger, multi-instrumentalist Brian Jones, guitarist Keith Richards, bassist Bill Wyman, and drummer Charlie Watts. During their formative years Jones was the primary leader: he assembled the band, named it, and drove their sound and image. After Andrew Loog Oldham became the group's manager in 1963, he encouraged them to write their own songs. Jagger and Richards became the primary creative force behind the band, alienating Jones, who developed a drug addiction that interfered with his ability to contribute meaningfully.",
                    "wUrl": "http://en.wikipedia.org/wiki/The_Rolling_Stones",
                    "yUrl": "https://www.youtube-nocookie.com/embed/YzjZEci-EiU",
                    "yID": "YzjZEci-EiU",
                    "thumb_url": "https://photos.bandsintown.com/thumb/8652945.jpeg",
                    },
                    {
                    "Name": "Queen",
                    "Type": "music",
                    "wTeaser": "Queen are a British rock band formed in London in 1970. Their classic line-up was Freddie Mercury (lead vocals, piano), Brian May (guitar, vocals), Roger Taylor (drums, vocals) and John Deacon (bass). Their earliest works were influenced by progressive rock, hard rock and heavy metal, but the band gradually ventured into more conventional and radio-friendly works by incorporating further styles, such as arena rock and pop rock.Before forming Queen, May and Taylor had played together in the band Smile. Mercury was a fan of Smile and encouraged them to experiment with more elaborate stage and recording techniques. He joined in 1970 and suggested the name \"Queen\". Deacon was recruited in February 1971, before the band released their eponymous debut album in 1973. Queen first charted in the UK with their second album, Queen II, in 1974. Sheer Heart Attack later that year and A Night at the Opera in 1975 brought them international success. The latter featured \"Bohemian Rhapsody\", which stayed at number one in the UK for nine weeks and helped popularise the music video format.",
                    "wUrl": "http://en.wikipedia.org/wiki/Queen_(music)",
                    "yUrl": "https://www.youtube-nocookie.com/embed/fJ9rUzIMcZQ",
                    "yID": "fJ9rUzIMcZQ",
                    "thumb_url": "https://photos.bandsintown.com/thumb/219038.jpeg"
                    }] }
            }

          });

    it('should display a header on main dashboard', () => {
        cy.intercept('GET', 'http://fe-cors-proxy.herokuapp.com', interceptData)
        cy.visit('http://localhost:3000/')
        .get('.header').get('img').should('have.attr', 'src')
        .get('.search-bar').should('have.value', '')
        .get('.button-search').contains('Find Artist')
    });


    it('should display bubbles', () => {
        cy.visit('http://localhost:3000/')
        cy.wait(5000)
        .get('.big-bubs').find('img').should('be.visible')
        .get('.bubble-wrap').find('h2').should('be.visible')
        .get('.little-bubs').get('#bubble5').find('h4').should('be.visible')
    });

    it('should have clickable bubbles ', () => {
        cy.visit('http://localhost:3000/')
        cy.wait(5000)
        .get('.little-bubs').get('#bubble5')
        .click()
        .get('.bubble-wrap').find('h2').should('be.visible')
    });

    it('should display a footer', () => {
        cy.intercept('GET', 'http://fe-cors-proxy.herokuapp.com', interceptData)
        cy.visit('http://localhost:3000/')
        .get('.footer')
    });

    it('should allow user to click on main artist and route to a new page', () => {
        cy.visit('http://localhost:3000/')
          .get('.bubble-wrap')
          cy.wait(2000)
          .get('.big-bubs').click()
          .get('iframe')
    });

 
    it("should display error message to user when encountering 422 error", () => {
        cy.intercept('GET', "http://fe-cors-proxy.herokuapp.com", {
          statusCode: 422,
        }).as("422 error");
        cy.visit("http://localhost:3000/")
        .contains(`Whoops! Looks like you Rec'D Me...`)
      });

      
    it("should display error message to user when encountering 500 error", () => {
        cy.intercept('GET', "http://fe-cors-proxy.herokuapp.com", {
            statusCode: 500,
        }).as("500 error");
        cy.visit("http://localhost:3000/")
        .contains(`Whoops! Looks like you Rec'D Me...`)
        });
  });