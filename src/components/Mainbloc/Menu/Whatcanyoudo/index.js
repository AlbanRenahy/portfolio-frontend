import React from 'react';
import MySwal from 'sweetalert2';
import axios from 'axios';
import withReactContent from 'sweetalert2-react-content';
import './whatcanyoudo.scss';

class Whatcanyoudo extends React.Component {

  componentDidMount() {
    // Manually active AOS to see the animation
    setTimeout(() => {
      this.first.classList.add("aos-animate")
    }, 0);
    setTimeout(() => {
      this.second.classList.add("aos-animate")
    }, 0);
    setTimeout(() => {
      this.third.classList.add("aos-animate")
    }, 0);
  }

  escapeHtml = (text) => {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  Swal = withReactContent(MySwal);

  ipAPI = 'https://api.ipify.org?format=json';

  showApiAlert = () => {
    this.Swal.queue([{
      title: 'Your public IP',
      confirmButtonText: 'Show my public IP',
      text:
        'Your public IP will be received via AJAX request',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return fetch(this.ipAPI)
          .then(response => response.json())
          .then(data => this.Swal.insertQueueStep("Here is your ip: " + data.ip + " &#128526"))
          .catch(() => {
            this.Swal.insertQueueStep({
              type: 'error',
              title: 'Unable to get your public IP'
            })
          })
      }
    }])
  }

  showClickAlert = () => {
    const { clickCounter } = this.props;
    const before = clickCounter > 1 ? " times" : " time";
    const now = (clickCounter + 1) > 1 ? " times" : " time";

    this.Swal.fire(
      'How many time you clicked?',
      '<p>Before clicking this button you clicked <span style="color: #c57b39">' + clickCounter + before + "</span>... But now you clicked <span style='color: #c57b39'>" + (clickCounter + 1) + now + "</span>! &#128561</p>",
      'info'
    )
  }

  showAppreciationAlert = () => {
    this.Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2']
    }).queue([
      {
        title: 'Your firstname?',
      },
      {
        title: 'Your comment?',
      },
    ]).then((result) => {
      if (result.value) {
        let pseudo = result.value[0];
        let description = result.value[1];
        axios.post('https://albanbackend.herokuapp.com/comments/insert', {
          pseudo,
          description
        })
          .then(function (response) {
            // handle success
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
        this.Swal.fire({
          title: 'Thanks! Your appreciation has been successfully added.',
          html:
            '<div style="display:flex;flex-direction:column;align-items:center;width:60%;margin:0 auto;color: black;border: 2px solid #464646;border-radius:4px;padding: 20px;margin-top: 20px;">' +
            '<p style="width: 100%;">' + this.escapeHtml(result.value[1]) + '</p>' +
            '<p style="align-self: flex-end;font-size: 1rem;opacity: .7;">- ' + this.escapeHtml(result.value[0]) + '</p>' +
            '</div>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }

  render() {
    return (
      <div id="whatcanyoudo">
        <div className="section-title">
          <div data-aos="fade-right">What can I do?</div>
          <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
        </div>
        <div className="content">
          <div className="text">
            I can work on different projects and technologies regarding the differents stacks of Web Development.<br />Front, back, general knowledges and concepts about the web development operation to create valuables applications. <br/> Let me show you some things I can do.
          </div>

          <div className="container skills animated-border" data-aos="zoom-in">
            <div className="item skill" data-aos="fade-left" data-aos-delay="200" ref={(e) => this.first = e}>
              <h3>Get your IP Address with an API call using AJAX technology</h3>
              <div className="btn btn-one" onClick={this.showApiAlert}>
                <span>Oh really? Show me!</span>
              </div>
            </div>
            <div className="item skill" data-aos="fade-left" data-aos-delay="400" ref={(e) => this.second = e}>
              <h3>Show you how many times you "clicked" since you are on this website using Redux to store globally the state of the application</h3>
              <div className="btn btn-one" onClick={this.showClickAlert}>
                <span>No way! How many times?</span>
              </div>
            </div>
            <div className="item skill" data-aos="fade-left" data-aos-delay="600" ref={(e) => this.third = e}>
              <h3>Storing your appreciation of this website in database using Node.js and Cloud MongoDB Atlas</h3>
              <div className="btn btn-one" onClick={this.showAppreciationAlert}>
                <span>Let me add a comment!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Whatcanyoudo;