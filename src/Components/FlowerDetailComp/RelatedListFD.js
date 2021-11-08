import React, { useState } from 'react'
import { Row, Carousel } from 'react-bootstrap'

let flower_list = [
  {
    nama: 'Bunga 1',
    harga: '100000',
    poster: '../../Assets/images/pngfind-1-transparent.png'
  },
  {
    nama: 'Bunga 2',
    harga: '200000',
    poster: '../../Assets/images/pngfind-2-transparent.png'
  },
  {
    nama: 'Bunga 3',
    harga: '300000',
    poster: '../../Assets/images/pngfind-3-transparent.png'
  },
  {
    nama: 'Bunga 4',
    harga: '400000',
    poster: '../../Assets/images/pngfind-4-transparent.png'
  },
  {
    nama: 'Bunga 5',
    harga: '500000',
    poster: '../../Assets/images/pngfind-5-transparent.png'
  },
  {
    nama: 'Bunga 6',
    harga: '600000',
    poster: '../../Assets/images/pngfind-6-transparent.png'
  },
  {
    nama: 'Bunga 7',
    harga: '700000',
    poster: '../../Assets/images/pngfind-7-transparent.png'
  },
  {
    nama: 'Bunga 8',
    harga: '800000',
    poster: '../../Assets/images/pngfind-8-transparent.png'
  },
  {
    nama: 'Bunga 9',
    harga: '900000',
    poster: '../../Assets/images/pngfind-9-transparent.png'
  }
]

class RelatedListFD extends React.Component {
  ControlledCarousel() {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex)
    }

    return (
      <Row className="related-movie mx-5 mt-2 mb-5 justify-content-center">
        <Carousel fade variant="dark" id={ `carouselExampleControls` } className="carousel slide w-75" activeIndex={index} onSelect={handleSelect}>
        {
          flower_list.map((data, sequence) => {
            return(
                <Carousel.Item key={ `flower-${sequence+1}` }>
                  <a href={ `/flower/${data.nama}` } className="link">
                    <img
                      className="w-20 h-20"
                      src={ require(`../../Assets/images/pngfind-${sequence+1}-transparent.png`) }
                      alt={ `${data.nama}` }
                    />
                  </a>
                  <Carousel.Caption>
                    <h4 style={{ "color": "whitesmoke", "fontStyle": "italic" }}> {`${data.nama}`} </h4>
                  </Carousel.Caption>                       
                </Carousel.Item>
            )            
          })
        }
        </Carousel>   
      </Row>
    )
  }

  render() {
    return <this.ControlledCarousel />
  }
}

export default RelatedListFD