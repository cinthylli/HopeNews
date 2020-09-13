import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import Card from '../components/Card'
import { connect } from 'react-redux'
import * as newsActions from '../actions/newsActions'
import Spinner from '../components/general/Spinner'
import Fatal from '../components/general/Fatal';
import '../css/news.css'
class News extends Component {

    callingCategories = () => {
        if (this.props.location.pathname === '/sports') {
            this.props.traerTodasCategoria({ category: 5 });
        }
        if (this.props.location.pathname === '/politics') {
            this.props.traerTodasCategoria({ category: 1 });
        }
        if (this.props.location.pathname === '/technology') {
            this.props.traerTodasCategoria({ category: 3 });
        }
        if (this.props.location.pathname === '/design') {
            this.props.traerTodasCategoria({ category: 6 });
        }
        if (this.props.location.pathname === '/international') {
            this.props.traerTodasCategoria({ category: 2 });
        }
        if (this.props.location.pathname === '/') {
            let date = '2020-02-02'
            this.props.traerTodas({ date: date });
        }
    }


    componentDidMount() {
        this.callingCategories();
    }


    componentDidUpdate(prevProps, prevState) {
        if (!(prevProps.location.pathname === this.props.location.pathname)) {

            this.callingCategories();
        }
    }

    fillCards = () => this.props.news.map((news) => (

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
        return (
            <>
                <main>
                    <Container textAlign='center' >
                        <h1>{this.props.title}</h1>
                        <section className="section">
                            {this.fillCards()}

                        </section>
                        <div>
                            <Button content='Before' icon='left arrow' labelPosition='left' onClick={() => {
                                this.props.traerDiezAnteriores();
                            }} />
                            <Button content='Next' icon='right arrow' labelPosition='right'  onClick={() => {
                                this.props.traerDiezSiguientes();
                            }}  />
                        </div>
                    </Container>
                </main>

            </>
        );
    }
}

const mapStateToProps = (reducers) => {
    return reducers.newsReducer;
}


export default connect(mapStateToProps, newsActions)(News);