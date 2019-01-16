import React, {Component} from 'react';
import './Form.scss';


class FormMain extends Component {
    state = {
        name: '',
        surname: '',
        email: '',
        gender: '',
        news: true
    };
    submitForm = () => {
        // e.preventDefault();
      const name = this.name.value;
      const surname = this.surname.value;
      const email = this.email.value;
      const gender = this.gender.value;
      const news = this.news.checked;
      this.setState({
          name: name,
          surname: surname,
          email: email,
          gender: gender,
          news: news
      });
    };
    render() {
        return (
            <div className="form__wrapper">
                <h4 className="form__wrapper__title">Contact Form</h4>
                <form onSubmit={this.submitForm}>
                    <div className="form__wrapper__item">
                        <label
                            htmlFor="form__name"
                        >
                            name:
                        </label>
                        <input
                            type="text"
                            id="form__name"
                            name="name"
                            ref={name => {this.name = name}}
                        />
                    </div>
                    <div className="form__wrapper__item">
                        <label 
                            htmlFor="form__surname"
                        >
                            surname:
                        </label>
                        <input 
                            type="text" 
                            id="form__surname"
                            ref={surname => {this.surname = surname}}
                        />
                    </div>
                    <div className="form__wrapper__item">
                        <label 
                            htmlFor="form__email"
                        >
                            email:
                        </label>
                        <input 
                            type="email" 
                            id="form__email"
                            ref={email => {this.email = email}}
                        />
                    </div>
                    <div className="form__wrapper__item">
                        <label
                            htmlFor="form__gender"
                        >
                            gender:
                        </label>
                        <select
                            id="form__gender"
                            ref={gender => {this.gender = gender}}
                        >
                            <option
                                value="male"
                            >
                                male
                            </option>
                            <option
                                value="female"
                            >
                                female
                            </option>
                        </select>
                    </div>
                    <div className="form__wrapper__item">
                        <input
                            type="checkbox"
                            id="form__subscribe"
                            ref={value => {this.news = value}}
                        />
                        <label
                            htmlFor="form__subscribe"
                        >
                            subscribe to my newsletter
                        </label>
                    </div>
                    <div className="form__wrapper__item">
                        <input type="submit" value="submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormMain;