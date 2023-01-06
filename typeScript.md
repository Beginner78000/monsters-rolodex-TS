# TYPESCRIPT

```ts
/** EXTENDS METHOD */
interface ISearchBoxProps extends IChangeHandlerProps {
    className: string;
    placeholder?: string;
}

interface IChangeHandlerProps {
    onChangeHandler: (a: string) => void;
}

/** OVERLOAD METHOD */
interface ISearchBoxProps {
    className: string;
    placeholder?: string;
}

interface ISearchBoxProps {
    // ChangeEventHandler est la manière rapide d'écrire ChangeEvent
    // la différence est qu'elle retourne obligatoirement void
    onChangeHandlerFunc: ChangeEventHandler<HTMLInputElement>;
    // La méthode ChangeEvent permet de retourner autre chose que void (string, boolean ...)
    // ou d'ajouter d'autre paramètre => elle permet de customiser la fonction
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

/** Union with type */
// Combination of types
type CanadianAdress = {
  street: string;
  province: string;
}

type USAdress = {
    street: string;
    province: string;
}

type NorthAmericanAdress = CanadianAdress | USAdress;

const Adress: NorthAmericanAdress = {
    ...
}

```
