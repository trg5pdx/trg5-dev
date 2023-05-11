export const data = {
  about: [
    /* HTML */ `
      Voluptate reprehenderit et sunt qui duis enim cillum nulla ullamco.
      Pariatur dolore ad consectetur eiusmod minim enim magna non pariatur do.
      Non minim nostrud culpa culpa Lorem id voluptate. Eiusmod voluptate irure
      in in ad nostrud proident ullamco sint. Enim reprehenderit ex adipisicing
      elit Lorem ad esse eu. Labore enim ullamco ipsum sint. Laboris
      reprehenderit qui tempor sunt. Mollit nisi occaecat minim dolor commodo
      sint minim id non amet. Enim proident cupidatat irure quis ullamco minim
      anim. Irure dolore sint laboris elit aliqua officia voluptate dolore
      occaecat amet consectetur nisi. In reprehenderit ad nulla fugiat deserunt
      mollit veniam amet adipisicing dolor. Ea do fugiat qui nulla est deserunt
      ea fugiat sit. Amet ullamco labore in sint. Nisi irure culpa aute eiusmod
      Lorem deserunt amet sunt dolor officia elit labore eiusmod. Magna fugiat
      irure Lorem cillum. Ut ut ex sit cillum.
    `,
    /* HTML */ `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Repellat, pariatur soluta, rem reprehenderit ea voluptatibus iste
    laboriosam, dolores architecto voluptatem officiis nulla debitis magnam
    beatae commodi delectus culpa eaque. Qui.`,
  ],
  skills: [
    {
      section: [
        {
          item: 'Programming Languages and Frameworks',
          subitems: [
            'C/C++',
            'HTML/CSS',
            'Javascript/TypeScript',
            'React',
            'TailwindCSS',
            'PostgreSQL',
            'Rust',
            'Haskell',
          ],
        },
      ],
    },
    {
      section: [
        {
          item: 'Technical Writing/Documentation',
        },
        {
          item: 'Familiar with Networking Concepts',
        },
        {
          item: 'Software',
          subitems: [
            'OSes: Linux, Windows',
            'Coding tools: Vim, VSCode, Gdb, Git',
            'Office/Design: Microsoft Office, Figma',
            'Network tools: Wireshark',
          ],
        },
      ],
    },
  ],
  school: [
    {
      section: [
        {
          item: 'Degree: BS Computer Science',
          subitems: [
            'School: Portland State University',
            'Attendance dates: Sep 2017 - Mar 2023',
            'GPA: 3.45',
          ],
        },
      ],
    },
    {
      section: [
        {
          item: 'Important Classes',
          subitems: [
            'Internetworking Protocols',
            'Functional Programming',
            'Unit Testing/Branching Strategies',
            'Operating Systems',
            'Algorithms',
            'Databases',
            'Programming Languages',
            'Code Reading & Review',
            'Software Engineering',
          ],
        },
      ],
    },
    {
      section: [
        {
          item: 'Capstone: Blurp webapp',
          subitems: [
            'Project Duration: Sep. 2022 - Mar. 2023',
            'Worked as a Frontend developer on a team of 10 people and 2 team leads',
            'Used React.js and the SigmaJS and Graphology libraries',
          ],
        },
      ],
    },
  ],
  work: [
    {
      section: [
        {
          item: 'Office Assistant @ Upward Bound ETS: Sep 2019 - Mar 2023',
        },
      ],
    },
    {
      section: [
        {
          item: 'Tutor @ Upward Bound ETS: Sep 2017 - Jun 2019',
        },
      ],
    },
  ],
  projects: [
    {
      title: 'Blurp',
      desc: [
        /* HTML */ `
          Blurp was a capstone project I worked on with 2 team leads, and a team
          of 10 people. It was a project for building an app that allows for
          users to map out their relationships to people, places, and ideas.
          This was meant as a tool for therapists to send to their patients
          before a session to help understand patients better. For this project,
          we went for a simplistic design, as the tools that already existed for
          this were specialized and inaccessible to most users, both being in
          terms of cost, and in terms of usability. I worked on the frontend
          portion of this app, which we used React, SigmaJS, and Graphology to
          make the app work. I worked on sending and retrieving data from the
          database, worked on different GUI components like the modal that
          appears upon loading in, and worked on getting the data associated
          with a node or relationship to be loaded into a form in the app that
          the user could edit and then save back to the node. Overall, the
          project was very interesting to work with, as it had me think about
          how users were going to be interacting with our software, and it had
          me learn a lot of new skills while working on it.
        `,
      ],
      repo: 'https://github.com/pdx-blurp/blurp-frontend',
      otherTitle: 'Project Links',
      other: 'https://github.com/pdx-blurp',
    },
    {
      title: 'Haskell Webserver',
      desc: [
        /* HTML */ `
          This was a simple key/value webserver that I wrote for a final project
          for my functional programming class. The server can only handle
          plaintext and html formatted data, and it only implements get and put
          http requests. It allows for users using software like netcat put data
          on the server, and allows for users to use a web browser to access
          that data and have it display properly in the browser. While not
          technically impressive, it was more meant as an exercise in
          abstracting different components of a webserver into small functions,
          and for me to write an application using a functional language.
        `,
      ],
      repo: 'https://github.com/trg5pdx/haskell-webserver',
    },
    {
      title: 'IRC Client/Server',
      desc: [
        /* HTML */ ` This was a chat client/server written in python meant to
        work in a similar way to an IRC chat client/server. However it isn’t
        compatible with the IRC protocol, as I wrote my own protocol for this
        client and server. This was written to get a chance to work with
        networking, and to be able to write software that uses te TDP protocol.
        The software I wrote for this allows for multiple users to connect and
        create chatrooms, send messages to one or more chatrooms, and be able to
        disconnect on their own. Users who joined a room after could join and
        receive the message history as they’re joining in. It was cool to work
        with networking, and to be able to send a message on one computer and
        see the result on another, and it was interesting working through the
        problems I ran into while programming this.`,
        /* HTML */ `For example, to get around the issue of only having one user
        connect at a time, I set up the server to be multithreaded, with one
        thread watching for new connections, and a new thread being created each
        time a user connects. Each user thread was set up to obtain the lock and
        add a message to the server when a new message was received, which it
        would then release the lock and the other threads would then see the
        change and send out the new message to the clients. I think this
        could’ve been done in a better way as its pretty inefficient to have two
        threads per client, but that was the way I approached it with the
        limited time I had. I also had issues with coming up how I would store
        the messages, and how I would set up the chatrooms, which I ultimately
        solved it by creating a map data structure for each chatroom, and wrote
        up a class for the chatrooms to help keep track of the data and the
        messages being stored. For actually parsing the packets, I went through
        multiple stages with how I designed it, eventually setting it up to use
        enums for each possible option of parsing, and to keep track of state as
        the parsers is going through each line of the received packet. `,
      ],
      repo: 'https://github.com/trg5pdx/IRC_project',
    },
    {
      title: 'Civlike',
      desc: [
        /* HTML */ `
          Civlike is a prototype of a 4X strategy game written in Rust. The game
          was written using the Bracket-lib library, which is mainly meant for
          creating terminal based roguelike games. I’m not too into roguelikes,
          so I decided to try and work on a 4X stratgy game in the style of a
          terminal game as I’m a fan of games like Sid Meier’s Civilization.
        `,
      ],
      repo: 'https://github.com/trg5pdx/civlike',
    },
    {
      title: 'Xv6',
      desc: [
        /* HTML */ `
          I worked on Xv6 as part of my Operating Systems class at PSU. Xv6 is
          an OS thats mainly focused on teaching students about the in’s and
          out’s of OS development, and how they function internally without
          giving them an OS thats too complex. For Xv6, I worked on creating new
          programs for the OS that could be run from it’s command line, worked
          on how processes were handled, implemented a round-robin scheduler,
          and implemented a multilevel feedback queue algorithm (MLFQ) into the
          scheduler. For the round-robin scheduler and MLFQ, the primary purpose
          of implementing those was to teach about how OSes avoid programs being
          unable to run due to other processes using up all of the resources,
          which was done by implementing states that the processes would run
          through to ensure that they would pause at some point and let others
          run, hence the name round robin. And the MLFQ algorithm adds to that
          by making it utilize multiple cores, and be able to prioritize what
          runs even better than a basic round-robin scheduler would. One of the
          ways it does this is by adding priority levels and a process promotion
          and demotion system to help determine what processes get to run and
          when.
        `,
      ],
      repo: 'https://github.com/trg5pdx/xv6',
    },
  ],
};
