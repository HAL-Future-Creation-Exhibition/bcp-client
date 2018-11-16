<template>
  <div class="row">
    <div class="col-12">
      <card>
        <div class="server-view-container">
          <div class="view"></div>
          <div class="editor-container">
            <div id="html-editor"></div>
            <div id="css-editor"></div>
            <div id="js-editor"></div>
          </div>
        </div>
        <!-- <ul class="nav nav-pills nav-pills-rose">
          <li class="nav-item"><a class="nav-link" href="#pill1" data-toggle="tab">Profile</a></li>
          <li class="nav-item"><a class="nav-link active" href="#pill2" data-toggle="tab">Settings</a></li>
          <li class="nav-item"><a class="nav-link" href="#pill3" data-toggle="tab">Options</a></li>
        </ul>
        <div class="tab-content tab-space">
            <div class="tab-pane active" id="pill1">
              Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
              <br><br>
              Dramatically visualize customer directed convergence without revolutionary ROI.
            </div>
            <div class="tab-pane" id="pill2">
              Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
              <br><br>Dramatically maintain clicks-and-mortar solutions without functional solutions.
            </div>
            <div class="tab-pane" id="pill3">
                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                <br><br>Dynamically innovate resource-leveling customer service for state of the art customer service.
            </div>
        </div> -->

      </card>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.generateEditors();
  },
  data() {
    return {
      code: {
        html: `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`,
        css: `body {
  width: 100%;
  height: 100%;
}`,
        js: `console.log("Hello World");`
      }
    }
  },
  methods: {
    generateEditors() {
      const html_editor = ace.edit("html-editor");
      html_editor.setTheme("ace/theme/monokai");
      html_editor.getSession().setMode("ace/mode/html");
      html_editor.setValue(this.code.html, -1);
      const css_editor = ace.edit("css-editor");
      css_editor.setTheme("ace/theme/monokai");
      css_editor.getSession().setMode("ace/mode/css");
      css_editor.setValue(this.code.css, -1);
      const js_editor = ace.edit("js-editor");
      js_editor.setTheme("ace/theme/monokai");
      js_editor.getSession().setMode("ace/mode/javascript");
      js_editor.setValue(this.code.js, -1);
    }
  }
}
</script>
<style lang="scss" scoped>
.server-view-container {
  .view {
    width: 100%;
    height: 270px;
    background-color: #fff;
    margin-bottom: 20px;
  }
  .editor-container {
    display: flex;
    #html-editor,
    #css-editor,
    #js-editor {
      width: 33%;
      height: 200px;
    }
  }  
}
</style>
