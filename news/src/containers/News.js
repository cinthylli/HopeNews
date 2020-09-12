import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Card from '../components/Card'
import { connect } from 'react-redux'
import * as newsActions from '../actions/newsActions'
import Spinner from '../components/general/Spinner'
import Fatal from '../components/general/Fatal';
class News extends Component {

    componentDidMount() {
        let date = new Date().toISOString().split('T')[0];
        console.log(date);
        date = new Date().toUTCString()
        date = new Date(date).toISOString()
        console.log(date);
        date = new Date().toLocaleTimeString();
        console.log(date);
        date = '2020-02-02'
        this.props.traerTodas({ date: date });
    }


    fillCards = () => this.props.news.splice(0,10).map((news) => (
        
        <Card
            title={news.title}
            url={news.url}
            source_name={news.source_name}
            category={news.category}
            img_url={news.img_url}
            key={news.news_id}

        />
    ))

    render() {
        if (this.props.loading) {
            return <Container textAlign='center'>
                <Spinner />
            </Container>

        }
        if (this.props.error) {
            return <Container textAlign='center'>
                <Fatal message={this.props.error} />
            </Container>
        }

        console.log(this.props)
        return (
            <section>
                <h1>{this.props.category}</h1>
                <Container textAlign='center'>
                    {this.fillCards()}
                </Container>
            </section>
        );
    }
}

const mapStateToProps = (reducers) => {
    return reducers.newsReducer;
}


export default connect(mapStateToProps, newsActions)(News);