import React from 'react';
import Card from './Card';
import '../styles/components/Card.scss';

class CardList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: [{
                "id": 1,
                "level": "level2",
                "img": "../../resources/imgs/dose-media-344938.png",
                "category": "Technology",
                "title": "Search Engine Optimizacion And Adverstising",
                "description": ">There is a lot of exiting stuff going on in the stars above us that make astronomy so much fun."
            },{
                "id": 2,
                "level": "level1",
                "img": "../../resources/imgs/aidan-hancock-455440.png",
                "category": "Technology",
                "title": "Search Engine Optimizacion And Adverstising",
                "description": ">There is a lot of exiting stuff going on in the stars above us that make astronomy so much fun."
            },
            {
                "id": 3,
                "level": "level2",
                "img": "../../resources/imgs/crew-22235.png",
                "category": "Finance",
                "title": "Search Engine Optimizacion And Adverstising",
                "description": ">There is a lot of exiting stuff going on in the stars above us that make astronomy so much fun."
            },{
                "id": 4,
                "level": "level1",
                "img": "../../resources/imgs/annie-spratt-213059.png",
                "category": "Finance",
                "title": "Search Engine Optimizacion And Adverstising",
                "description": ">There is a lot of exiting stuff going on in the stars above us that make astronomy so much fun."
            },{
                "id": 5,
                "level": "level2",
                "img": "../../resources/imgs/jeff-sheldon-264920.png",
                "category": "Finance",
                "title": "Search Engine Optimizacion And Adverstising",
                "description": ">There is a lot of exiting stuff going on in the stars above us that make astronomy so much fun."
            },{
                "id": 6,
                "level": "level2",
                "img": "../../resources/imgs/jeff-sheldon-264920.png",
                "category": "Finance",
                "title": "Search Engine Optimizacion And Adverstising",
                "description": ">There is a lot of exiting stuff going on in the stars above us that make astronomy so much fun."
            },{
                "id": 2,
                "level": "level1",
                "img": "../../resources/imgs/aidan-hancock-455440.png",
                "category": "Technology",
                "title": "Search Engine Optimizacion And Adverstising",
                "description": ">There is a lot of exiting stuff going on in the stars above us that make astronomy so much fun."
            },{
                "id": 6,
                "level": "level2",
                "img": "../../resources/imgs/jeff-sheldon-264920.png",
                "category": "Finance",
                "title": "Search Engine Optimizacion And Adverstising",
                "description": ">There is a lot of exiting stuff going on in the stars above us that make astronomy so much fun."
            },{
                "id": 2,
                "level": "level1",
                "img": "../../resources/imgs/aidan-hancock-455440.png",
                "category": "Technology",
                "title": "Search Engine Optimizacion And Adverstising",
                "description": ">There is a lot of exiting stuff going on in the stars above us that make astronomy so much fun."
            },{
                "id": 6,
                "level": "level2",
                "img": "../../resources/imgs/jeff-sheldon-264920.png",
                "category": "Finance",
                "title": "Search Engine Optimizacion And Adverstising",
                "description": ">There is a lot of exiting stuff going on in the stars above us that make astronomy so much fun."
            },{
                "id": 6,
                "level": "level2",
                "img": "../../resources/imgs/jeff-sheldon-264920.png",
                "category": "Finance",
                "title": "Search Engine Optimizacion And Adverstising",
                "description": ">There is a lot of exiting stuff going on in the stars above us that make astronomy so much fun."
            }   ]
        }
    }

    render() {
        return(
            <div className="card__container">
               
                { this.state.data.map((cardItem) => {
                    return(
                        <Card 
                            level={cardItem.level}
                            img={cardItem.img}
                            category={cardItem.category}
                            title={cardItem.title}
                            description={cardItem.description}
                        />
                    )
                })}
            </div>
        )
    }
}

export default CardList;