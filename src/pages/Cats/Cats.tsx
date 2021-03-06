import React from "react";
import { Avatar, Center, Spinner, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { useCatsList } from "./hooks/useCatsList";
import { Navigation } from "../Navigation/Navigation";
import "./Cats.css";

export const Cats = () => {
    const { isLoading, catsList, getCats } = useCatsList();

    React.useEffect(() => {
        getCats();
    }, []);

    return <Stack p="0 15px">
        <Navigation />

        {isLoading && <Center>
            <Spinner
                thickness="5px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        </Center>}

        {!isLoading && <Center>
            <div className="dogs-wrap">
                <Wrap>
                    {catsList.map((cat, i) => (
                        <WrapItem key={cat}>
                            <Avatar size="2xl" src={cat} name={i.toString()} />
                        </WrapItem>
                    ))}
                </Wrap>
            </div>
        </Center>}
    </Stack>;
};