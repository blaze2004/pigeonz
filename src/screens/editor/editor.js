import React, { useCallback } from "react";
import { Editor, Transforms, Text } from "slate";
import { Editable } from "slate-react";
import { Flex } from "@aws-amplify/ui-react";
import { IconButton } from "@mui/material";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  Code,
  List,
  TitleTwoTone
} from "@mui/icons-material";

const CodeElement = (props) => {
  return <code {...props.attributes}>{props.children}</code>;
};

const ListElement = (props) => {
  return (
    <ul {...props.attributes}>
      <li>{props.children}</li>
    </ul>
  );
};

const HeadingElement = (props) => {
  return (
    <h1 {...props.attributes} fontWeight="bolder">
      {props.children}
    </h1>
  );
};
const SubHeadingElement = (props) => {
  return (
    <h2 {...props.attributes} fontWeight="bold">
      {props.children}
    </h2>
  );
};
const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

const Leaf = (props) => {
  return (
    <span
      {...props.attributes}
      style={{
        fontWeight: props.leaf.bold ? "bold" : "normal",
        fontStyle: props.leaf.italic ? "italic" : "normal",
        textDecoration: props.leaf.underline ? "underline" : "none"
      }}
    >
      {props.children}
    </span>
  );
};

function ToolBar(props) {
  return <Flex backgroundColor="#171718">{props.children}</Flex>;
}

function TextEditor(props) {
  const { editor, readOnly } = props;

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      case "list":
        return <ListElement {...props} />;
      case "title":
        return <HeadingElement {...props} />;
      case "title2":
        return <SubHeadingElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  function formatItalic() {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.italic
    });

    Transforms.setNodes(
      editor,
      { italic: !match },
      { match: (n) => Text.isText(n), split: true }
    );
  }

  function formatBold() {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.bold
    });

    Transforms.setNodes(
      editor,
      { bold: !match },
      { match: (n) => Text.isText(n), split: true }
    );
  }

  function formatUnderlined() {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.underline
    });

    Transforms.setNodes(
      editor,
      { underline: !match },
      { match: (n) => Text.isText(n), split: true }
    );
  }

  function formatCode() {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "code"
    });
    Transforms.setNodes(
      editor,
      { type: match ? null : "code" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  }

  function formatList() {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "list"
    });
    Transforms.setNodes(
      editor,
      { type: match ? null : "list" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  }

  function formatTitle() {
    const [match1] = Editor.nodes(editor, {
      match: (n) => n.type === "title"
    });
    const [match2] = Editor.nodes(editor, {
      match: (n) => n.type === "title2"
    });

    Transforms.setNodes(
      editor,
      { type: match1 ? null : match2 ? "title" : "title2" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  }

  const onKeyDown = (event) => {
    if (!event.ctrlKey) { return };

    event.preventDefault();

    switch (event.key) {
      case "&": {
        editor.insertText("and");
        break;
      }

      case "b": {
        formatBold();
        break;
      }

      case "i": {
        formatItalic();
        break;
      }

      case "u": {
        formatUnderlined();
        break;
      }

      case "`": {
        formatCode();
        break;
      }

      case "l": {
        formatList();
        break;
      }

      case "h": {
        formatTitle();
        break;
      }

      default: {
        break;
      }
    }
  };

  const toolbarWidget=!readOnly? (<ToolBar>
    <IconButton
      onPointerDown={(e) => {
        formatBold();
      }}
      style={{ color: "grey" }}
    >
      <FormatBold />
    </IconButton>
    <IconButton
      onPointerDown={(e) => {
        formatItalic();
      }}
      style={{ color: "grey" }}
    >
      <FormatItalic />
    </IconButton>
    <IconButton
      onPointerDown={(e) => {
        formatUnderlined();
      }}
      style={{ color: "grey" }}
    >
      <FormatUnderlined />
    </IconButton>
    <IconButton
      onPointerDown={(e) => {
        formatCode();
      }}
      style={{ color: "grey" }}
    >
      <Code />
    </IconButton>
    <IconButton
      onPointerDown={(e) => {
        formatList();
      }}
      style={{ color: "grey" }}
    >
      <List />
    </IconButton>
    <IconButton
      onPointerDown={(e) => {
        formatTitle();
      }}
      style={{ color: "grey" }}
    >
      <TitleTwoTone />
    </IconButton>
  </ToolBar>):<p></p>;
  return (
    <Flex
      backgroundColor="#171718"
      color="#fff"
      direction="column"
      padding="10px"
      width="100%"
    >
      {toolbarWidget}
      <Editable
        readOnly={readOnly}
        onKeyDown={onKeyDown}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
      />
    </Flex>
  );
}

export default TextEditor;
