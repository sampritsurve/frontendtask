import React from 'react';
import './Image.css';
import './Style.css'

// function Image() {
 class Image extends React.Component {

        constructor(props) {
          super(props);
          this.state = {
            items: [],
            isLoaded: false,
          }
        }

        componentDidMount(){
          fetch('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
          .then(res => res.json())
          .then(json => {
            this.setState({
              isLoaded: true,
              items: json,
            })
          });

        }


        render() {

          var { isLoaded, items } = this.state;

          if(!isLoaded) {
            return <div>loading....</div>
          }
          else {

            return (
              <div>

              <ul class="gallery">

                {items.map(item => (
                  <li key={item.id} class="gallery img">
                    <img src={item.urls.regular} alt="images" />
                  </li>
                ))}

          ;    </ul>

              </div>
            );

          }

        }
      }
// }
export default Image;