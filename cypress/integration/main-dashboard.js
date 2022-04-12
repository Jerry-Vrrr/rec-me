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
                    "yID": "YzjZEci-EiU"
                    },
                    {
                    "Name": "Queen",
                    "Type": "music",
                    "wTeaser": "Queen are a British rock band formed in London in 1970. Their classic line-up was Freddie Mercury (lead vocals, piano), Brian May (guitar, vocals), Roger Taylor (drums, vocals) and John Deacon (bass). Their earliest works were influenced by progressive rock, hard rock and heavy metal, but the band gradually ventured into more conventional and radio-friendly works by incorporating further styles, such as arena rock and pop rock.Before forming Queen, May and Taylor had played together in the band Smile. Mercury was a fan of Smile and encouraged them to experiment with more elaborate stage and recording techniques. He joined in 1970 and suggested the name \"Queen\". Deacon was recruited in February 1971, before the band released their eponymous debut album in 1973. Queen first charted in the UK with their second album, Queen II, in 1974. Sheer Heart Attack later that year and A Night at the Opera in 1975 brought them international success. The latter featured \"Bohemian Rhapsody\", which stayed at number one in the UK for nine weeks and helped popularise the music video format.",
                    "wUrl": "http://en.wikipedia.org/wiki/Queen_(music)",
                    "yUrl": "https://www.youtube-nocookie.com/embed/fJ9rUzIMcZQ",
                    "yID": "fJ9rUzIMcZQ"
                    }] }
            }
          });

    it('should display a header on main dashboard', () => {
        cy.intercept('GET', 'https://tastedive.com/api/similar?k=435194-ConcertT-B82P7E7L&info=1&q=the+beatles', interceptData)
        cy.visit('http://localhost:3000/')
        .get('.header').contains('RecMe')
        .get('.search-bar').should('have.value', '')
        .get('.select').should('have.value', 'Music')
        .get('.search').should('have.value', '')
        .get('.search').should('have.attr', 'placeholder', 'search')
        .get('.submit').contains('🔎')
        .get('.favorites').should('have.attr', 'placeholder', 'Favorites')
    });

    it('should display banner', () => {
        cy.intercept('GET', 'https://tastedive.com/api/similar?k=435194-ConcertT-B82P7E7L&info=1&q=the+beatles', interceptData)
        cy.visit('http://localhost:3000/')
        .get('.banner').find('img').should('be.visible')
        
    });

    it('should display ', () => {
        cy.intercept('GET', 'https://tastedive.com/api/similar?k=435194-ConcertT-B82P7E7L&info=1&q=the+beatles', interceptData)
        cy.visit('http://localhost:3000/')
        
    });

    it('should display ', () => {
        cy.intercept('GET', 'https://tastedive.com/api/similar?k=435194-ConcertT-B82P7E7L&info=1&q=the+beatles', interceptData)
        cy.visit('http://localhost:3000/')
        
    });

    it('should display ', () => {
        cy.intercept('GET', 'https://tastedive.com/api/similar?k=435194-ConcertT-B82P7E7L&info=1&q=the+beatles', interceptData)
        cy.visit('http://localhost:3000/')
        
    });


  });