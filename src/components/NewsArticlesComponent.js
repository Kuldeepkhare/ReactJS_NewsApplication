import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardLink
} from 'reactstrap';
import * as moment from 'moment';

/**
 * This component renders the news cards with news received from API
 * @param props
 * @returns {*}
 * @constructor
 */
const NewsArticlesComponent = (props) => {
    let count = 0;
    return (
        <div className="container">
            <div className="row">
                {props.articles.map((article) => (
                    <div key={count++} className="col-12 col-md-5 m-1">
                        <Card className={count % 2 == 0 ? 'background-alternate' : 'background-lightgrey'}>
                            <CardImg width="100%" src={article.urlToImage} alt={article.title}/>
                            <CardBody>
                                <CardTitle style={{"textAlign": "left"}}>{article.title}</CardTitle>
                                {article.author ? <CardSubtitle
                                    style={{"textAlign": "left"}}><strong>Author: </strong>{article.author}
                                </CardSubtitle> : null}
                                <CardText style={{"textAlign": "left"}}><strong>Published
                                    On: </strong>{moment(article.publishedAt).format('hh:mm MMM DD YYYY')}</CardText>
                                <CardText>{article.description}<CardLink href={article.url}>Read
                                    more...</CardLink></CardText>
                                <CardText>Share this news via:</CardText>
                                <a className="btn btn-social-icon btn-facebook m-1"
                                   href="http://www.facebook.com/profile.php?id=">
                                    <i className="fa fa-facebook"></i></a>
                                <a className="btn btn-social-icon btn-linkedinm-1"
                                   href="http://www.linkedin.com/in/"><i
                                    className="fa fa-linkedin"/></a>
                                <a className="btn btn-social-icon btn-twitter m-1" href="http://twitter.com/"><i
                                    className="fa fa-twitter"/></a>
                                <a className="btn btn-social-icon btn-google m-1" href="http://youtube.com/"><i
                                    className="fa fa-youtube"/></a>
                                <br/>
                                <Button outline color="primary">Comment</Button>
                                <i className="fa fa-lg fa-thumbs-up m-1" aria-hidden="true">Like</i>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewsArticlesComponent;