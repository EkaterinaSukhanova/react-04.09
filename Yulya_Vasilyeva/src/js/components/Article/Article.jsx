//импорт пользовательских стилей для редактирования статей
import './Article.scss';

//импорт React
import React, { Component } from 'react';
//для проверки свойств компонента
import PropTypes from 'prop-types';

//импорт карточек из Bootstrap и Layout
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row, Col // layout
} from 'reactstrap';

//импортируем пользовательскую функцию для импорта изображений
import {importAllIMG} from './functions';


export default class Article extends Component {
    static propTypes = {
        text: PropTypes.arrayOf(PropTypes.object),
    }
    render() {
        const { text } = this.props;
        //все изображения из папки img сохраняем в массив images
        const images = importAllIMG(require.context('./img', false, /\.(png|jpe?g)$/));
        return (
            <Row>
                {text.map((item)=>{
                    return(
                    <Col md="6" key={item.id}>
                    <Card className="article">
                        <CardImg top width="100%" src={"img/article-" + item.id + ".jpeg"}/>
                        <CardBody>
                            <CardTitle className='blog-title'>{item.title}</CardTitle>
                            <CardSubtitle className='blog-data'>Дата публикации: {item.data}</CardSubtitle>
                            <CardText>{item.text}</CardText>
                            <Button color="warning" className="read-more">Подробнее</Button>
                        </CardBody>
                    </Card>
                    </Col>
                    )
                })}   
            </Row>
        );
    }
}