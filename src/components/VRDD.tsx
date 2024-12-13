// import { useState } from "react";
import "./vrdd.scss";

export const VRDD = () => {
  return (
    <>
      <div id="VRDD" className="videoContainer">
        <h2>VR Design Document</h2>
        <section>
          <h3>Razor</h3>
          <p>
            Design an environment that transforms based on the player's
            perspective and scale, offering a distinct and immersive experience
            with every shift in viewpoint.
          </p>
          <h3>Slogan</h3>
          <p>
            Life is a game, become the game, and step into the world you once
            only imagined
          </p>
          <h3>Vision statement & top level summary of your project idea</h3>
          <p>
            Bearthday Blues is a game that puts you in the shoes of a child and
            their toys. Experience both perspectives as the child controlling
            the environment and as a toy experiencing the changes in the
            environment as your own reality. Traverse through a dynamic
            environment filled with toys and make your way through obstacles by
            manipulating objects
          </p>
          <h3>Goal of project</h3>
          <p>
            Immerse the player in a big-scale environment, which provides them
            with an unconventional experience of everyday objects
          </p>{" "}
          <h3>Theme of project</h3>{" "}
          <ul>
            {" "}
            <li>
              <strong>Depending on the POV:</strong>
            </li>
            <li>Kid: Dream-like, playful </li>
            <li>Toy: realistic</li>
          </ul>
          <h3>Visual style of project</h3>{" "}
          <ul>
            <li>
              Styles: Soft edges, colors, low-poly, warm orange, dream-like
              atmosphere
            </li>
            <li>Inspiration: Toy Story, It Takes Two</li>
          </ul>
          <h3>Core desired user experience </h3>
          <p>
            The User should feel immersed in the environment when small. As a
            child, the user should have a sense of control over the objects
            presented in front of them.{" "}
          </p>{" "}
          <div className="subsection">
            {" "}
            <h4>Who are the target audiences?</h4>
            <p>
              18-30-year-old cozy-gamers who are looking to explore how VR
              provides a unique experience
            </p>
            <h4>
              Desired user experience and how your VR experience ideally
              transforms immersants
            </h4>
            <p>
              The key immersion we want our users to experience is the
              difference in scale between the two playable characters; “step
              into another’s shoes”. What seems normal and easy to one, can be a
              huge challenge and obstacle for another. This experience can teach
              players empathy while having fun solving puzzles.
            </p>
            <h4>
              How is your project taking advantage of the special affordance and
              opportunity of VR?
            </h4>
            <p>
              We are not used to seeing everyday objects abnormally large.
              Through this project, we provide the user with the experience of
              being small and large. The different feeling when confronted with
              the same object but through a different perspective.
            </p>
            <h4>Relation to course design challenge</h4>
            <p>
              Our project relates to the course design challenge as we are
              creating an immersive and interactive VR environment. We address
              it in a form of a game with challenges and immersing players in a
              world that is not available in real life (ex. the soldier’s
              experience interacting with big objects and unable to do things a
              human/player can do easily).
            </p>
          </div>
        </section>
        <section>
          <h2>Introduction</h2>
          <p>
            Our VR game offers a unique experience by allowing players to switch
            between the perspectives of a child and their toy. The objective is
            to solve collaborative puzzles, with each character’s scale
            providing distinct gameplay dynamics. As the child, players engage
            imaginatively, creating challenges within a playful narrative. As
            the toy, players navigate these challenges as their reality,
            emphasizing personal stakes and immersive problem-solving. This dual
            perspective highlights the contrast between imagination and lived
            experience, creating a rich and engaging adventure where scale
            transforms the player's interaction with the world.
          </p>
          <h3>Narrative/Story </h3>
          <p>
            The game starts with the kid characters picking up a Lego toy to
            play with. The perspective then switches to the toy world, in which
            the player becomes the toy itself. From this point on, the toy has
            to figure out the way out of a maze with some help from the kid, and
            solve a puzzle to open the door of a toy house by the end of it. The
            player can switch between the toy and the kid’s perspective at any
            time. By the end of the maze, the toy faces an angry hungry bear
            that they have to feed a cake to, if only they can find the
            ingredients. Once the player bakes, and delivers the cake, the bear
            is happy and the toy is free!
          </p>
          <div className="collage collage3">
            <img src="../../public/assets/ui/2.png"></img>
            <img src="../../public/assets/ui/bearcake.png"></img>
            <img src="../../public/assets/ui/cakehowto.png"></img>
          </div>{" "}
          <div className="collage collage3">
            <img src="../../public/assets/ui/xy.png"></img>{" "}
          </div>
          <h3>Storyboard</h3>
          <img src="../../public/assets/sb1.png"></img>
          <img src="../../public/assets/sb2.png"></img>
          <img src="../../public/assets/sb3.png"></img>
          <h3>VR mechanics & Physical Rig</h3>
          <p>
            The Player will use the Oculus controllers to interact with the
            games. Instructions on how to play the game will presented to them
            before the game starts. The style of the GUI reflects children’s
            drawings to further emphasize the setting and story of the game. The
            Player should feel the shift between the 2 perspectives and feel a
            part of the maze when they are small through the decor, scale, and
            story. After completing the game, they will have gained insight to
            what it is like to experience something from multiple perspectives.
          </p>
          <div className="collage collage3">
            <img src="../../public/assets/ui/guide1.png"></img>
            <img src="../../public/assets/ui/guide2.png"></img>
            <img src="../../public/assets/ui/guide3.png"></img>
          </div>
          <div className="subsection">
            <h4>Core mechanics </h4>
            <p>
              The game will consist of two characters, a child and a toy, the
              main gimmick for our game is the character-switching mechanic that
              allows players to switch between these two characters. While
              playing as a child or a toy, the player can pick up objects like
              balls, flashlights, and baking ingredients. The player also can
              move with the toy using a locomotion gliding system, the player
              cannot, however, move while playing as the child and can only
              teleport to get different vantage points around the play area.
            </p>
            <h4>Secondary mechanics</h4>
            <p>
              Our game is intended to be a single player game, with an E rating
              for everyone as it’s designed to be played by all ages. The
              physical setup would just be someone with a VR headset seated, and
              the game doesn’t need a big space for the player to physically
              walk around in.
            </p>
            <div className="collage collage3">
              <img src="../../public/assets/storyboard/storyboard_step1.png"></img>
              <img src="../../public/assets/storyboard/storyboard_step3.png"></img>
              <img src="../../public/assets/storyboard/storyboard_step5.png"></img>
              <img src="../../public/assets/storyboard/storyboard_step7.png"></img>
              <img src="../../public/assets/storyboard/storyboard_step9.png"></img>
              <img src="../../public/assets/storyboard/storyboard_step10.png"></img>
              <img src="../../public/assets/storyboard/storyboard_step11.png"></img>
              <img src="../../public/assets/storyboard/storyboard_step14.png"></img>
              <img src="../../public/assets/storyboard/storyboard_step13.png"></img>
            </div>
            <h4>Envisioned physical setup </h4>

            <p>
              <strong>Physical Setup and Pre/Post-VR Experience </strong>
              <br /> Since our game does not require physical movement, the
              player’s physical setup can be flexible. Ideally, we recommend
              that the player sits comfortably in a clear area to avoid
              collisions with objects in their environment. The game can be
              played either while seated or standing, but neither is required
              for the experience. This flexibility ensures that players can
              enjoy the experience without worrying about physical constraints.
            </p>
            <p>
              The game is set inside a child’s room, with the player dynamically
              switching between the perspectives of a child and a toy. The toy
              character uses a built-in locomotion system that allows players to
              move around the maze without requiring physical movement, which
              makes it suitable for limited physical space. The child character
              remains stationary in the game, observing the toy from above, and
              the player controls them through teleportation.
            </p>
            <p>
              <strong>Additional Stimulation and User Interaction </strong>
              <br /> Beyond the visual and auditory elements in the game, we
              envision no additional physical stimulation (such as wind, touch,
              or temperature) for this project. The focus is on creating an
              engaging and immersive VR experience through the dual perspectives
              and interactive puzzle-solving mechanics. However, in a more
              advanced setup, integrating haptic feedback could enhance the
              tactile experience of interacting with objects.
            </p>
            <p>
              <strong>HMD-based vs. Screen-based Experience </strong>
              <br /> to switch between the toy and the child’s viewpoints
              seamlessly. In a screen-based version, this immersive experience
              would be significantly reduced, as the player would lack the
              ability to physically move through the space and switch
              perspectives as naturally. The HMD-based version allows for
              greater immersion by using the player's head movement and
              controllers to interact with the environment.
            </p>
            <img src="../../public/assets/room1.png"></img>
            <h4>Locomotion technique </h4>
            <p>
              The main locomotion technique used is the constant speed gliding
              used when moving the toy around the maze, we figured this is the
              best way of moving around the maze as teleportation as a toy, and
              inside a maze is hard to justify and does not make sense and is
              also hard to implement. The second form of locomotion is in the
              form of teleportation, the child can teleport on the three white
              dots to get different vantage points around the map. We wanted to
              limit the movement of the child so that they could only interact
              with certain objects and fulfill their role as “eyes” on the map.
              Additionally, we kept the built-in snap turn to help players
              change views quickly.
            </p>
            <p>
              The two techniques: constant-speed gliding for the toy and
              teleportation for the child, supplemented by a built-in snap-turn
              system.
            </p>
            <p>
              <strong>Constant-Speed Gliding (Toy)</strong>
              <br />
              Pros: Provides smooth, intuitive movement through the maze,
              enhancing immersion. It aligns with the toy's limited
              capabilities, supporting the narrative of a small figure ons:
              Restricted movement may feel less engaging for some players.
              navigating a vast environment. <br />
              Cons: May require fine-tuning to ons: Restricted movement may feel
              less engaging for some players. prevent motion sickness in some
              players. <br />
              Support for Experience: Gliding reinforces the feeling of being
              small and constrained, immersing players in the toy's perspective
              and challenges.
            </p>
            <p>
              <strong>Teleportation (Child) </strong>
              <br />
              Pros: Simplifies navigation, reduces motion sickness risk, and
              limits the child's role to observation and interaction, aligning
              with their function as ons: Restricted movement may feel less
              engaging for some players. "eyes" in the game. <br />
              Cons: Restricted ons: Restricted movement may feel less engaging
              for some players. movement may feel less engaging for some
              players.
              <br /> Support for Experience: Encourages strategic planning and
              collaboration by offering a bird’s-eye view and the ability to
              assist the toy.
            </p>
          </div>
          <h3>Inspiration Analysis</h3>
          <p>
            Our project is inspired by our childhood experience of playing with
            toys when we used our imagination to build environments to fuel our
            stories. The way we control toys to live out our stories is
            reflected through the 2 perspectives of the kid playing while the
            toy lives it. By imagining what it would be as the toy instead of
            the child playing, we constructed our puzzles and look of the game.
            Trying to emulate how it would feel to be smaller than a Jenga
            block.
          </p>{" "}
          <p>
            We needed to use objects that are typically found in a childs room,
            like, jenga blocks, lego figures, and plastic food bits. This is
            common in Toy’s Story and It takes 2. Where we drew from their use
            of toys as furniture and scaling them up in comparison to the main
            character.
          </p>
          <div className="collage collage2">
            <img src="../../public/assets/inspo1.jpg"></img>
            <img src="../../public/assets/inspo2.jpg"></img>
            <img src="../../public/assets/inspo3.jpg"></img>
            <img src="../../public/assets/inspo4.jpg"></img>
          </div>
          <h3>Immersion Frameworks</h3>
          <p>
            Especially scale-wise, and in the toy’s maze, the aspect of presence
            will make the player fully immersed as a small-scaled character even
            though they exist in a normal human scale in the real world, which
            will make the user fully immersed
          </p>
          <p>
            We are mostly focusing on physical (spatial) and psychological
            (cognitive) immersion. By focusing on these two immersion
            techniques, the game experience will be intuitive enough so the
            puzzles are not too challenging, and the user can get a chance to
            enjoy different scales the experience offers.
          </p>
          <p>
            Physically, we want the spatial immersion to be prominent, the user
            will be thinking as if they are actually a toy when they walking
            through the huge walls of the maze, which look so tiny when they
            switch to the kid’s perspective. The player as a toy will be
            immersed cognitively by solving puzzles that their human created for
            them, and they have no way out otherwise. Once they understand that
            they can switch between the toy and the kid, they will be fully
            immersed in the collaborative puzzle between the two characters they
            are controlling.
          </p>
        </section>
        <section>
          <h2>Reflection</h2>
          <h3>Why Your Project is Innovative</h3>
          <p>
            Switching between two perspectives to solve puzzles in a game is not
            very common, so we are providing a unique experience, especially
            that the two perspectives are completely different scales and have
            different objectives, which makes the game exciting.
          </p>
          <p>
            Our game is relevant because kids or adults who are nostalgic about
            their early childhood can enjoy the game equally. It is meaningful
            and desirable to players because it encourages them to focus on the
            bigger picture instead of being limited to what the real world is.
          </p>
          <p>
            For the showcase, our main selling point is encouraging the audience
            to embrace their inner child and engage in our game, where they get
            to be a toy navigating in a playful environment and solving puzzles
            that challenge the limited abilities of a toy. This experience will
            let players experience the world from another fictional perspective.{" "}
          </p>
          <h3>User Testing Goals and Outcomes</h3>
          <p>
            Goal: ensuring that our game is smooth and has no errors that make
            the user unsatisfied or leave the game
          </p>{" "}
          <p>
            Hypotheses: a well-designed game with two-scale perspectives and
            puzzles will immerse the player into staying in the game and
            finishing it, leaving the player satisfied and wanting more of that
            experience.
          </p>
          <h4>Questions:</h4>
          <div className="subsection">
            <ul>
              {" "}
              <li>How do you feel when you navigate the maze? </li>{" "}
              <li> How is the shift between perspective</li>{" "}
              <li>
                {" "}
                How easy was it to pick up the interactions of moving items and
                switching perspectives (are the controls intuitive)
              </li>{" "}
              <li>
                {" "}
                Do you feel immersed in the story, do you feel like the toy?
              </li>{" "}
              <li>
                {" "}
                Were the puzzles challenging, was it easy to understand what to
                do? Was it fun?
              </li>{" "}
              <li> What do you think is the role of the kid?</li>{" "}
              <li> What do you think about the maze puzzle?</li>{" "}
              <li> How do you feel about the game's NPCs? </li>{" "}
              <li>How intuitive is it to know what the bear wants?</li>{" "}
              <li>
                {" "}
                How do you feel about the dark kitchen area and the use of
                flashlights?{" "}
              </li>{" "}
              <li>How easy is it to find the ingredients for the cake?</li>{" "}
              <li> What do you think about the game overall?</li>
            </ul>
          </div>
          <h4>Methods</h4>
          <p>
            We will use the think-aloud method, the game will be tested by one
            player at a time, and during the gameplay, we will ask the player
            our questions and assist them when needed, and they will be
            encouraged to vocalize their actions and thoughts during the game,
            while we take notes.
          </p>
          <h4>Results</h4>
          <p>
            Most players reported feeling uncertain of their goal when they were
            navigating through the maze, although they started figuring it out
            after approaching the first ball, but we had to tell them that the
            kid needed to help them when they switched perspectives. The players
            were okay with the movement, although one of them felt a little
            nauseous, however, they all liked the smooth switch between the kid
            and the toy. Almost all players struggled with placing the ball in
            its designated pressure plates, finding it and pointing with the ray
            casts was very challenging. In terms of the puzzles, the players
            thought there was a good amount of challenge there, even though it
            was confusing at the beginning. When it comes to the bear NPC and
            the cooking puzzle, players really liked the bear but were just
            observing it from far away and didn’t get a chance to read what it
            really wanted, and when they entered the kitchen they were confused.
            Finally, players thought that the flashlight wasn’t very necessary,
            but was a cool addition. The players enjoyed the game overall and
            felt immersed as a toy, especially when they saw the Lego toy far
            away and small in the kid’s eyes.
          </p>
          <h4>Meta-reflection</h4>
          <p>
            Building on the results we got from the user study, and keeping in
            mind that the game was not fully complete by the time the study
            happened, first, we will focus on fixing the bugs the players faced
            during the gameplay, such as picking up and placing the balls in the
            maze, and also picking the cake and delivering it to the bear.
            Second, we are going to be working on the second puzzle, making it
            clear that by putting the balls in the right pressure plates, a door
            will open by the end of the maze, that leads to a kitchen. We will
            also be adding the complete design for the kitchen and finishing the
            puzzle design by placing the ingredients in hidden places. We were
            thinking that maybe players were rushing through the playthrough so
            they didn’t bother checking the dialogue above the bear, but we are
            hoping that after the kitchen is complete, the players will go back
            to the bear to check if has something to do with the kitchen.
            Finally, we added more decorations in the bedroom and maze to
            improve the visual appeal of the game, even though players already
            expressed their love for the style of the game. We are also debating
            whether we are going to change the color of the floor of the maze,
            to make it easier for the player to see the pressure plates from the
            kid’s perspective, however, we might keep the colorful floor because
            it adds some challenge.
          </p>
          <h2>Prototyping process</h2>
          <h4>Initial ideation sketches:</h4>
          <p>
            First, we created rough sketches of the idea of the game and the
            feel and look of the levels and characters.
          </p>
          <div className="collage collage2">
            <img src="../../public/assets/sketch1.jpg"></img>
            <img src="../../public/assets/sketch2.jpg"></img>
            <img src="../../public/assets/sketch3.jpg"></img>
            <img src="../../public/assets/maze.png"></img>
          </div>
          <h4>3D objects + programming:</h4>
          <p>
            Then, we created the characters the environment, and puzzle objects
            gradually while using placeholders for the mechanics and programming
            of the game.
          </p>
          <div className="collage collage3">
            <img src="../../public/assets/lego.png"></img>
            <img src="../../public/assets/child.png"></img>
            <img src="../../public/assets/dino.png"></img>
            <img src="../../public/assets/fridge.png"></img>
            <img src="../../public/assets/kitchen.png"></img>
            <img src="../../public/assets/cupboard.png"></img>
            <img src="../../public/assets/oven.png"></img>
            <img src="../../public/assets/cake.png"></img>
            <img src="../../public/assets/bear.png"></img>
          </div>
          <h4>User Testing:</h4>
          <p>
            We conducted user testing on 3 users during lab hours to figure out
            any bugs to fix before the final showcase
          </p>
          <div className="collage collage2">
            <img src="../../public/assets/user2.png"></img>
          </div>{" "}
          <div className="collage collage2">
            <img src="../../public/assets/user.jpg"></img>
          </div>
          <h4>Fixing Bugs and final prototype:</h4>
          <p>
            After the game mechanics were done, we added all the final designs
            to the final prototype
          </p>
          <div className="collage collage2">
            <img src="../../public/assets/room1.png"></img>
            <img src="../../public/assets/room2.png"></img>
          </div>
          <h3>Development Process</h3>
          <p>
            Inspired by games like “It Takes Two” and movies like “Toy Story”,
            our game idea started as an adventure of a toy character in a
            big-scale environment where the toy has to solve puzzles while being
            challenged by its limited capabilities. Later, we thought that it
            would be interesting to implement something different in our game,
            where the kid helps the toy solve its puzzles, and the player can
            switch between these two characters, which makes our game more
            unique and interesting. Then, we started brainstorming ideas for the
            puzzles of the games, one of them being the maze, which we linked to
            another challenge, to add a purpose to the game, such as the toy
            having to feed an angry bear as a final goal to be able to complete
            the puzzles and be free.
          </p>{" "}
          <div className="collage collage2">
            <img src="../../public/assets/jam1.png"></img>
            <img src="../../public/assets/jam2.png"></img>
          </div>
          <p>
            {" "}
            To create the maze, we used a generated maze design through a maze
            generator online and imported it into our game, to get started with
            the basic mechanics. This is where everyone started working
            simultaneously on their parts. Samantha took care of the group’s
            timeline and weekly tasks, while Pocholo got started with the game
            mechanics and setting up the maze, with some support from Samantha.
            Megan and Rabab started designing the game objects to place them
            gradually into the environment, starting with the most important
            ones like game characters, NPC, and puzzle objects, and ending with
            complete environments for the kid’s bedroom and the toy’s puzzle
            world, along with sound effects and dialogue boxes, all ready to be
            implemented into the final prototype. When we reached the week where
            we had to implement FSM and an NPC logic, we encountered challenges
            every other week, especially for the game mechanics, such as the
            logic of the NPC and colliders, but with the support from the
            professor, we managed to solve these issues.
          </p>{" "}
          <p>
            We carried on with our parts consistently, including the game HUD
            designed by Megan, until the game was ready enough for a user study,
            which we performed on 3 users during lab hours. After the study, we
            noticed some bugs that needed to be solved, and some room for
            improvement before the final showcase, such as fixing the
            interactions with objects and making the puzzles a little more
            intuitive. Next, we started preparing for the final showcase,
            including poster, trailer, and showcase day setup.
          </p>{" "}
          <p>
            During the showcase, we included toys as props to support the story
            of the game. Before Players began, we walked them through our
            intention, concept, and story to provide an idea of what they should
            expect and complete within the game. We encouraged Players to begin
            exploring the game before asking for help in order to further
            understand where we can improve affordances and allow them to adjust
            to the new settings and controls. When needed, the Player can ask
            for hints on how to solve the next puzzle. We wanted the Players to
            grasp the game on their own to fully understand the mechanics we
            implement to further drive the concept of switching perspectives. We
            also encouraged thinking aloud so we can understand how to help them
            when needed.
          </p>
          <h3>Critique</h3>
          <p>
            The first feedback we got was regarding our idea of character
            switching, which the teaching staff found interesting but wanted to
            see an initial implementation it before finalizing it because the
            idea is a bit more complex than controlling a single character.
            Second, there was a debate about whether we should use teleportation
            or continuous movement for the toy character, which the teaching
            staff again recommended that we try continuous speed, and if it is
            causing sickness, we settle for teleportation. During the user test,
            some players recommended we have some instructions or a screen
            showing controls before the start of the game, and a hint of what
            they are supposed to do, especially for the character switching,
            since it is a bit ambiguous in the beginning. Finally, as mentioned
            before, there were multiple feedbacks regarding object interactions
            in the game, and we were asked to fix them.
          </p>
          <p>
            First, the perspective switch was smoothly done and showed
            admiration from the teaching staff and other students. As for the
            toy’s movement controls we went for the continuous speed because we
            wanted the user to be fully immersed in the big scale environment,
            which is the main idea of the game, as long as it did not cause
            motion sickness as he recommended, and we managed to find the
            perfect slow speed. For the final prototype, we are planning on
            adding a brief introduction of the character switching controls,
            since it wasn’t intuitive in the user test, moreover, we will
            implement playful sketches for each puzzle to give the user some
            hints without being too straightforward, to maintain the sense of
            challenge without getting the user stuck. As for object
            interactions, all will be fixed for the final prototype.
          </p>
          <h3>Equipment needs</h3>
          <h4>Equipment</h4>
          <ul>
            <li>Lego maze with a figure and ping-pong balls</li>
            <li>Hot Wheels car and trains</li>
            <li>Lego figure</li>
            <li>Bear</li>
            <li>Rotating chair</li>
            <li>Table for the items</li>
            <li>Tablecloth</li>
          </ul>
          <h4>Roles:</h4>
          <ul>
            <li>
              <strong>Pocholo:</strong> IT
            </li>
            <li>
              <strong>Samantha:</strong> Set up showcase, help players play
            </li>
            <li>
              <strong>Megan:</strong> Print deliverables, invite people to play
            </li>
            <li>
              <strong>Rabab:</strong> Bring toys, set up showcase
            </li>
          </ul>
          <h3>Technical Documentation</h3>
          <div>
            <h4>Links</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/sleepsim/445-VR-Project/tree/main"
                  target="_blank"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://1sfu-my.sharepoint.com/:f:/r/personal/mpy_sfu_ca/Documents/IAT445?csf=1&web=1&e=7U3VOo"
                  target="_blank"
                >
                  Storage Drive
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1HES2_55GwFd_7T7gpJel9gZispqvVRLA?usp=sharing"
                  target="_blank"
                >
                  Out-Sourced Audios
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Architecture</h3>
            <img src="../../public/assets/architecture.png"></img>
            <h3>Plugins</h3>
            <ul>
              <li>XR Interaction Toolkit</li>
              <li>Post Processing</li>
              <li>ProBuilder</li>
              <li>Oculus and Open XR Plugin</li>
              <li>XR Hands</li>
              <li>XR Core Utilities</li>
            </ul>
          </div>
          <div>
            <h3>Models</h3>
            <p>
              Drawn from previous academic projects by teammates and new models
              made for the game.
            </p>
          </div>
          <div>
            <h3>Scripts</h3>
            <p>The following scripts are used in the project:</p>
            <ul>
              <li>
                <b>BallColourReveal</b>: Changes ball color when the player
                approaches.
              </li>
              <li>
                <b>Camera Switch</b>: Switches cameras to alternate heights.
              </li>
              <li>
                <b>GlobalVariables</b>: Stores progression checks.
              </li>
              <li>
                <b>OvenBaking</b>: Ensures ingredients collide with the oven to
                bake a cake.
              </li>
              <li>
                <b>BakeButton</b>: Animates the button being pressed and signals
                if ingredients are there.
              </li>
              <li>
                <b>PlayerMovement</b>: Moves player using "WASD" keys.
              </li>
              <li>
                <b>PressureSwitch</b>: Checks if the correct ball collides with
                the correct switch to animate a trigger.
              </li>
              <li>
                <b>Value</b>: Reveals the value correlated with the switch if it
                is unlocked.
              </li>
              <li>
                <b>BearFSM</b>: Uses a finite state machine (FSM) to make the
                bear patrol an area and approach the player if within range.
              </li>
              <li>
                <b>BallPlaceholder</b>: Snaps a "fake" placeholder ball to the
                player's controller for correct scaling and visualization.
              </li>
              <li>
                <b>CakeScript</b>: Detects when the player gives the cake to the
                bear through proximity and ends the game.
              </li>
              <li>
                <b>CameraPriorityController</b>: Controls the priority of active
                cameras.
              </li>
              <li>
                <b>DoorButton</b>: Buttons in front of the kitchen door that
                locks the player out.
              </li>
              <li>
                <b>DoorScript</b>: Opens the door when the player approaches it.
              </li>
              <li>
                <b>Flashlight</b>: Emits a spotlight controlled by the
                character.
              </li>
              <li>
                <b>HUDScript</b>: Displays dialogue boxes over characters.
              </li>
              <li>
                <b>UIButton</b>: Handles interaction for UI buttons (main menu,
                intro/outro).
              </li>
              <li>
                <b>BakeButton</b>: Checks if all items are present and controls
                the bake button's behavior (hides ingredients, activates the
                final gate, etc.).
              </li>
              <li>
                <b>CakeAlt</b>: Alternate version of the cake that attaches to
                the player's hand for ease of use.
              </li>
              <li>
                <b>CollisionDebugger</b>: Simple script for debugging
                collisions.
              </li>
              <li>
                <b>MainMenuUI</b>: Modified version of UIButton for use in the
                main menu and end screen.
              </li>
              <li>
                <b>RevolveCanvas</b>: Keeps the canvas at a specific distance
                and adjusts its position to follow the user's view.
              </li>
              <li>
                <b>TestInteractObject</b>: Handles interaction for raycast and
                clickable objects such as balls and pressure plates.
              </li>
            </ul>
          </div>
          <div>
            <h3>Problems and Solutions</h3>
            <ul className="problem">
              <li>
                <b>Problem:</b> Cake would disappear while carrying it back to
                the bear since users need to switch to child view, and the toy
                XR Rig would despawn, causing the cake to fall on the ground.
                <br />
                <b>Solution:</b> Hide the cake so it doesn't need to be carried.
                Have a cake pre-attached to the player's controller and show it
                when the player picks it up. Change collision detection from
                cake/bear to bear/player to avoid bringing the cake physically.
              </li>
              <li>
                <b>Problem:</b> Manually dragging balls to the pressure sensors
                is hard and very clunky.
                <br />
                <b>Solution:</b> Modify the interaction so that balls attach to
                the controller and click to place on pressure plates.
              </li>
              <li>
                <b>Problem:</b> Balls attached to the controller were too large
                (XR Rigs for the toy and child are the same size, but the child
                is in a top-down view).
                <br />
                <b>Solution:</b> Use a placeholder ball that matches the
                controller's scale. Change its color to the current grabbed
                ball. Hide the real ball and position it behind the player.
              </li>
              <li>
                <b>Problem:</b> Teleport anchors teleported the wrong XR Rig.
                <br />
                <b>Solution:</b> Ensure only one XR Rig is enabled when starting
                a scene, making it the one used by the XR Interaction Manager
                for teleportation.
              </li>
              <li>
                <b>Problem:</b> Canvas as a screen-space overlay caused motion
                sickness and made reading canvases difficult.
                <br />
                <b>Solution:</b> Create a script that positions the canvas at a
                fixed developer-defined distance. Ensure the canvas follows the
                user's view, adjusting left and right as necessary.
              </li>
            </ul>
          </div>
          <div>
            <h3>GitHub</h3>
            <p>
              <a
                href="https://github.com/sleepsim/445-VR-Project"
                target="_blank"
              >
                GitHub - sleepsim/445-VR-Project
              </a>
            </p>
          </div>
          <div>
            <h3>Executable</h3>
            <p>Executable and Playthrough available in the repository.</p>
          </div>
        </section>{" "}
      </div>

      <section>
        <h2>Appendix</h2>
        <p>
          Images and sketches have already been included in their corresponding
          sections
        </p>
        <div className="collage collage3">
          <img src="../../public/assets/kid.png"></img>
          <img src="../../public/assets/bear_sticker.png"></img>
          <img src="../../public/assets/lego_sticker.png"></img>
          <img src="../../public/assets/cat1.png"></img>
          <img src="../../public/assets/cat2.png"></img>
        </div>
        <div className="collage collage3">
          <img src="../../public/assets/ui/guide4.png"></img>
          <img src="../../public/assets/ui/guide5.png"></img>
          <img src="../../public/assets/ui/guide6.png"></img>
        </div>
        <div className="hidden">
          <img src="../../public/assets/gang.webp"></img>
        </div>
      </section>
    </>
  );
};
