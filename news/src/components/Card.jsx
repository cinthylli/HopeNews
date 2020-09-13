import { Card, Image } from 'semantic-ui-react'
import React from 'react'

const CardExampleCardProps = ({ title, img_url, url, source_name, category }) => (
    <Card >
        <Image src={img_url || 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'} wrapped ui={false} className="image" href={url} style={{ width: '290px', height: 'auto' }} />
        <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
                <span className='date'>{category}</span>
            </Card.Meta>
            <Card.Description>
                <a href={url}>
                    {source_name}
                </a>
            </Card.Description>
        </Card.Content>
    </Card>
)

export default CardExampleCardProps
