<template>
  <div class="lecture">
    <Slide00 title="Scalable Vector Graphics - SVG" />
    <div class="slide">
      <hr />
      <h3>Scalable Vector Graphics (SVG)</h3>
      <p>
        Scalable Vector Graphics (SVG) are an
        <strong>XML-based markup language</strong> for describing
        <strong>two-dimensional based vector graphics</strong>.
      </p>
      <p>
        As such, it's a text-based, open Web standard for describing images that
        can be
        <strong
          >rendered cleanly at any size and are designed specifically to work
          well with other web standards including CSS, DOM, JavaScript, and
          SMIL</strong
        >. SVG is, essentially, to graphics what HTML is to text.
      </p>
      <p>
        SVG images and their related behaviors are defined in XML text files,
        which means they can be
        <strong>searched, indexed, scripted, and compressed</strong>.
        Additionally, this means they can be created and edited with any text
        editor or with drawing software.
      </p>
      <p>
        Compared to classic bitmapped image formats such as JPEG or PNG,
        SVG-format vector images can be
        <strong>rendered at any size without loss of quality</strong> and can be
        easily localized by updating the text within them, without the need of a
        graphical editor to do so. With proper libraries, SVG files can even be
        localized on-the-fly.
      </p>
    </div>
    <div class="slide">
      <hr />
      <h3>Good sources about SVG</h3>
      <p>
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/SVG"
          >MDN Web Docs</a
        >
      </p>
      <p>
        <a
          target="_blank"
          href="https://css-tricks.com/mega-list-svg-information/"
          >css-tricks: A Compendium of SVG Information</a
        >
      </p>
      <p>
        <a target="_blank" href="https://svgpocketguide.com/book/#intro"
          >Pocket Guide to Writing SVG
        </a>
      </p>
      <p>
        <a target="_blank" href="https://codepen.io/rachsmith/pen/xGVVrm"
          >The Quadratic Bézier Curve in SVG
        </a>
      </p>
      <p>
        <a target="_blank" href="https://codepen.io/thebabydino/pen/EKLNvZ"
          >Cubis Bezier curve with SVG
        </a>
      </p>
      <p>
        <a target="_blank" href="https://jakearchibald.github.io/svgomg/"
          >Optimization of SVG
        </a>
      </p>
    </div>
    <div class="slide">
      <hr />
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
            command is composed of a command letter and numbers that represent
            the command parameters.
          </p>

          <p>
            SVG defines 6 types of path commands, for a total of 20 commands:
          </p>
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
            absolute coordinates, while a lower-case command specifies
            coordinates relative to the current position. It is always possible
            to specify a negative value as an argument to a command: negative
            angles will be anti-clockwise; absolute negative x and y values are
            interpreted as negative coordinates; relative negative x values move
            to the left, and relative negative y values move upwards.
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
    <div class="slide">
      <hr />
      <h3>Exporting SVG from Figma</h3>
      <img
        class="img-ms"
        src="../../assets/images/image 2.png"
        alt="How to export SVG from Figma"
      />
      <p>
        Remeber about optimizing exported files!
        <a target="_blank" href="https://jakearchibald.github.io/svgomg/"
          >Optimization of SVG
        </a>
      </p>
      <p>Things to be consider while minimizing SVG files:</p>
      <ul>
        <li>
          "Shapes to smaller paths" - disable if you want to animate circles or
          rectangles
        </li>
        <li>"Merge paths" - disable if you want to animate paths</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Slide00 from "@/components/slides/title.vue";

export default {
  name: "Lecture00",
  components: {
    Slide00,
  },
  data() {
    return {
      render: 0,
    };
  },
  methods: {
    add() {
      this.render + 1;
      return this.render;
    },
  },
};
</script>

<style>
.space {
  padding-bottom: 5px;
}

.bold {
  font-weight: 700;
}

.past {
  opacity: 0.2;
}

.two-columns {
  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr);
  gap: 20px;
}

.three-columns {
  display: grid;
  grid-template-columns: 150px 1.1fr 0.9fr;
  gap: 40px;
  padding-top: 50px;
}

.rotate {
  transform: rotate(270deg);
  position: absolute;
  top: 20%;
  left: 0;
}

.flex {
  display: flex;
}

.font--small {
  font-size: 0.7em;
}
</style>
