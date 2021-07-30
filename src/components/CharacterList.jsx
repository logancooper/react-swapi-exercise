import { useEffect, useState } from "react";
import { Link, useHistory,useRouteMatch } from "react-router-dom";

const CharacterList = (props) => {
    const {url} = useRouteMatch();
    const charactersList = props.characters;
    return(
        <>
            <h1>This is a character list</h1>
            <nav>
                {charactersList.map((character) => (
                <>
                    <Link to={`${url}/${character.name}`}>{character.name}</Link>
                    <br />
                </>
                ))}
            </nav>
        </>
    );
}

export default CharacterList;