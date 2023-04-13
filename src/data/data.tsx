export const data = {
  projects: [
    {
      title: 'Blurp',
      desc: `
        Blurp was a capstone project I worked on with 2 team leads, and a team
        of 10 people. It was a project for building an app that allows for users
        to map out their relationships to people, places, and ideas. This was
        meant as a tool for therapists to send to their patients before a
        session to help understand patients better. For this project, we went
        for a simplistic design, as the tools that already existed for this were
        specialized and inaccessible to most users, both being in terms of cost,
        and in terms of usability. I worked on the frontend portion of this app,
        which we used React, SigmaJS, and Graphology to make the app work. I
        worked on sending and retrieving data from the database, worked on
        different GUI components like the modal that appears upon loading in,
        and worked on getting the data associated with a node or relationship to
        be loaded into a form in the app that the user could edit and then save
        back to the node. Overall, the project was very interesting to work
        with, as it had me think about how users were going to be interacting
        with our software, and it had me learn a lot of new skills while working
        on it.
      `,
      repo: 'https://github.com/pdx-blurp/blurp-frontend',
      otherTitle: 'Project Links',
      other: 'https://github.com/pdx-blurp',
    },
    {
      title: 'Haskell Webserver',
      desc: `
        This was a simple key/value webserver that I wrote for a final project
        for my functional programming class. The server can only handle
        plaintext and html formatted data, and it only implements get and put
        http requests. It allows for users using software like netcat put data
        on the server, and allows for users to use a web browser to access that
        data and have it display properly in the browser. While not technically
        impressive, it was more meant as an exercise in abstracting different
        components of a webserver into small functions, and for me to write an
        application using a functional language.
      `,
      repo: 'https://github.com/trg5pdx/haskell-webserver',
    },
    {
      title: 'IRC Client/Server',
      desc: `
        This was a chat client/server written in python meant to work in a
        similar way to an IRC chat client/server. However it isn’t compatible
        with the IRC protocol, as I wrote my own protocol for this client and
        server. This was written to get a chance to work with networking, and to
        be able to write software that uses te TDP protocol. The software I
        wrote for this allows for multiple users to connect and create
        chatrooms, send messages to one or more chatrooms, and be able to
        disconnect on their own. Users who joined a room after could join and
        receive the message history as they’re joining in. It was cool to work
        with networking, and to be able to send a message on one computer and
        see the result on another, and it was interesting working through the
        problems I ran into while programming this.\n For example, to get around
        the issue of only having one user connect at a time, I set up the server
        to be multithreaded, with one thread watching for new connections, and a
        new thread being created each time a user connects. Each user thread was
        set up to obtain the lock and add a message to the server when a new
        message was received, which it would then release the lock and the other
        threads would then see the change and send out the new message to the
        clients. I think this could’ve been done in a better way as its pretty
        inefficient to have two threads per client, but that was the way I
        approached it with the limited time I had.\n I also had issues with coming
        up how I would store the messages, and how I would set up the chatrooms,
        which I ultimately solved it by creating a map data structure for each
        chatroom, and wrote up a class for the chatrooms to help keep track of
        the data and the messages being stored. For actually parsing the
        packets, I went through multiple stages with how I designed it,
        eventually setting it up to use enums for each possible option of
        parsing, and to keep track of state as the parsers is going through each
        line of the received packet.
      `,
      repo: 'https://github.com/trg5pdx/IRC_project',
    },
    {
      title: 'Civlike',
      desc: /* HTML */ `
        Civlike is a prototype of a 4X strategy game written in Rust. The game
        was written using the Bracket-lib library, which is mainly meant for
        creating terminal based roguelike games. I’m not too into roguelikes, so
        I decided to try and work on a 4X stratgy game in the style of a
        terminal game as I’m a fan of games like Sid Meier’s Civilization.
      `,
      repo: 'https://github.com/trg5pdx/civlike',
    },
  ],
};
