<template>
  <div class="slide">
    <h3>Path attribute and Path commands</h3>
    <div class="two-columns">
      <div class="middle">
        <div>
          <p><b>Path</b></p>
          <p>
            The path attribute has two different meanings, either it defines a
            text path along which the characters of a text are rendered, or a
            motion path along which a referenced element is animated.
          </p>
        </div>
        <div>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <!-- to hide the path, it is usually wrapped in a <defs> element -->
            <!-- <defs> -->
            <path
              id="MyPath"
              fill="none"
              stroke="red"
              d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50"
            />
            <!-- </defs> -->

            <text>
              <textPath href="#MyPath">
                Quick brown fox jumps over the lazy dog.
              </textPath>
            </text>
          </svg>
        </div>
        <p class="sources">
          <a
            target="_blank"
            href=" https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textPath"
            >https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textPath</a
          >
        </p>
      </div>
      <div>
        <b>Path commands</b>
        <p>
          Path commands are instructions that define a path to be drawn. Each
          command is composed of a command letter and numbers that represent the
          command parameters.
        </p>

        <p>SVG defines 6 types of path commands, for a total of 20 commands:</p>
        <ul>
          <li>MoveTo: M,m</li>
          <li>LineTo: L, l, H, h, (horizontal) V, v (vertical)</li>
          <li>Bézier Curve: C, c, S, s</li>
          <li>Quadratic Bézier Curve: Q, q, T, t</li>
          <li>Elliptical Arc Curve: A, a</li>
          <li>ClosePath: Z, z</li>
        </ul>

        <p>
          Note: Commands are case-sensitive. An upper-case command specifies
          absolute coordinates, while a lower-case command specifies coordinates
          relative to the current position. It is always possible to specify a
          negative value as an argument to a command: negative angles will be
          anti-clockwise; absolute negative x and y values are interpreted as
          negative coordinates; relative negative x values move to the left, and
          relative negative y values move upwards.
        </p>
        <p class="sources">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands"
            >https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
