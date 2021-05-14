import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

/* By convention, interfaces for typing props are named following the structure "Component name" + "Props". */
interface SideBarProps {
  genreId: number;

  /* Declaring functions types within interfaces: https://medium.com/@jeffbutsch/typescript-interface-functions-c691a108e3f1 */
  onGenreChange(id: number): void;
}
export function SideBar(props: SideBarProps) {

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            /* Passing parameters back to the parent component: https://reactjs.org/docs/faq-functions.html */
            onClick={() => { props.onGenreChange(genre.id) }}
            selected={props.genreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}