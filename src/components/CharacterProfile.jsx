import { useParams } from "react-router-dom";


const CharacterProfile = (props) => {
    const { characterName } = useParams();
    let character = null;
    console.log(characterName);
    props.characters.forEach(c => {
        if(c.name === characterName)
        {
            character = c;
        }
    });

    if(character != null)
    {
        return(
            <>
                <h1>
                    {character.name}
                </h1>
                <p>
                    {character.birth_year}
                </p>
            </>
        );
    }
    else
    {
        return(
            <>
                <h1>
                    No Character Found
                </h1>
            </>
        );
    }


}

export default CharacterProfile;