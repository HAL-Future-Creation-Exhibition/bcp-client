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
      </card>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.generateEditors();
    document.addEventListener("keydown", this.save_key_bind, false);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.save_key_bind, false);
  },
  data() {
    return {
      editors: {
        html: null,
        css: null,
        js: null
      },
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
      this.editors.html = html_editor;
      const css_editor = ace.edit("css-editor");
      css_editor.setTheme("ace/theme/monokai");
      css_editor.getSession().setMode("ace/mode/css");
      css_editor.setValue(this.code.css, -1);
      this.editors.css = css_editor;
      const js_editor = ace.edit("js-editor");
      js_editor.setTheme("ace/theme/monokai");
      js_editor.getSession().setMode("ace/mode/javascript");
      js_editor.setValue(this.code.js, -1);
      this.editors.js = js_editor;
    },
    save_key_bind() {
      document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.which === 83) {
          e.preventDefault();
          console.log(this.editors.html.getValue())
          console.log(this.editors.css.getValue())
          console.log(this.editors.js.getValue())
          return false;
        }
      }, false)
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
