import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container, Row
} from 'reactstrap';



  // jangan sama nama class dengan nama import by reacstrap
  // jika varriable mau dibuat array. jangan lupa di inisiasi objek pada masing masing fungi agar
  // dapat terbaca
class AppCarousel extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
          activeIndex: 0,
          items : [
            {
              src: 'http://singlestickers.com/wp-content/uploads/2018/12/angus-cattle-clipart-beef-silhouette-wildlife-grass-black-cow-vector.jpg',
              altText: <h1> sapi endas mu</h1>,
              caption: <text className="text-banner caption " >Kelola keuangan anda dengan instrumen investasi yang terjangkau dan rendah resiko</text>
            },
            {
              src: 'http://singlestickers.com/wp-content/uploads/2018/12/angus-cattle-clipart-beef-silhouette-wildlife-grass-black-cow-vector.jpg',
              altText: 'Sapi kebo',
              caption: 'sapi betina'
            },
            {
              src: 'http://singlestickers.com/wp-content/uploads/2018/12/angus-cattle-clipart-beef-silhouette-wildlife-grass-black-cow-vector.jpg',
              altText: 'sapi export',
              caption: 'sapi shemale'
            }

          ],

        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }
    
      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
    
      render() {
        const { activeIndex } = this.state;
    
        const slides = this.state.items.map((item) => {
          return (
            
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.altText}
            >
              <img  style ={{width : '100%', height : '600px'}} src={item.src} alt={item.altText} />
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });
    

        return (

      
<div>          
        <Container >
  
          <Carousel 
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={this.state.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel> 
        
          </Container>
          </div>
         
        );
      }

}
export default AppCarousel