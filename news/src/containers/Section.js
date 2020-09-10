import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import Card from '../components/Card'
import axios from 'axios';
class Section extends Component {

    constructor() {
        super();
        this.state = {
            category: "Titulares",
            endpoint: "/latest",
            date: "/2020-04-29",
            news: []
        }
    }

    url = 'https://api.canillitapp.com';
    async componentDidMount() {
        const response = await axios.get(`${this.url}${this.state.endpoint}${this.state.date}`);
        console.log(`${this.url}${this.state.endpoint}${this.state.date}`);
        this.setState({
            news: response.data
        });
        console.log("news: ", this.state.news);
    }

    fillCards = () => this.state.news.map((news) => (
        <Card
            title={news.title}
            url={news.url}
            source_name={news.source_name}
            category={news.category}
            img_url={news.img_url}
            key= {news.news_id}

        />
    ))

    render() {
        return (
            <section>
                <Container textAlign='center'><h1>{this.state.category}</h1></Container>
                
                    {this.fillCards()}
                
            </section>


        );
    }
}

Section.propTypes = {

};

export default Section;