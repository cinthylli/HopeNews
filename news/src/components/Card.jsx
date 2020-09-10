import React from 'react'
import { Card, Image } from 'semantic-ui-react'



const CardExampleCardProps = ({ title, img_url, url, source_name, category }) => (


    <Card >
        <Image src={img_url} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
                <span className='date'>{category}</span>
            </Card.Meta>
            <Card.Description>
                <a href={url}>{source_name} </a>
            </Card.Description>
        </Card.Content>
    </Card>
)

export default CardExampleCardProps
