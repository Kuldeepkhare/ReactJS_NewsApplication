import React, {Component} from "react";
import {getLatestNews} from '../api';
import NewsArticlesComponent from './NewsArticlesComponent';
import FooterComponent from './FooterComponent';
import {
    Jumbotron, Container
} from 'reactstrap';

/**
 * This is the dashboard component that renders all the news cards
 */
class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            apiError: ''
        }
    }

    async componentDidMount() {
        try {
            const response = await getLatestNews();
            this.setState({articles: response.articles});
        } catch (error) {
            this.setState({apiError: "Could not find any articles"});
        }
    }

    render() {
        const jumbotronImage = 'https://static.coindesk.com/wp-content/uploads/2020/07/alina-grubnyak-R84Oy89aNKs-unsplash-1.jpg';
        const {articles, apiError} = this.state;
        if (this.state.articles && this.state.articles.length)
            return (
                <div className="container">
                    <div>
                        <Jumbotron fluid style={{backgroundImage: `url(${jumbotronImage})`, backgroundSize: 'cover'}}>
                            <Container fluid>
                                <h1 className="display-3">News Media</h1>
                                <p className="lead" style={{"background": "#f5f2d0", "borderRadius": "36px"}}>The only
                                    website providing customised news experience</p>
                            </Container>
                            <p style={{"background": "#f5f2d0", "margin": "0 25%", "borderRadius": "36px"}}>Made with
                                love in India<i className="fa fa-heart fa-lg" aria-hidden="true"/></p>
                        </Jumbotron>
                    </div>
                    <NewsArticlesComponent articles={this.state.articles}/>
                    <FooterComponent/>
                </div>
            );
        else
            return (
                <div className="container">
                    <div>Error Encountered!</div>
                </div>
            )
    }
}

export default DashboardComponent;