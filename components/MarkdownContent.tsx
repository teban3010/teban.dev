import Image from 'components/Image';
import { MyTheme } from 'styles/theme';
import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { makeStyles } from '@material-ui/core/styles';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const useStyles = makeStyles((theme: MyTheme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    '& a.preview-card-short-link': {
      maxWidth: '680px',
      border: `1px solid ${theme.palette.text.hint}`,
      textDecoration: 'none',
      margin: 'auto',
      backgroundColor: theme.palette.background.paper,
      fontWeight: 'bold',
      color: theme.palette.text.secondary,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: '15px',
      lineHeight: '16px',
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': 1,
      maxHeight: 40,
      textAlign: 'center',
      padding: 10,

      '&:hover': {
        backgroundColor:
          theme.type === 'dark'
            ? theme.palette.secondary.dark
            : theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText,
      },
    },
    '& a.preview-card': {
      display: 'flex',
      maxWidth: '680px',
      border: `1px solid ${theme.palette.text.hint}`,
      height: 165,
      textDecoration: 'none',
      margin: 'auto',
      backgroundColor: theme.palette.background.paper,

      '&:hover': {
        backgroundColor:
          theme.type === 'dark'
            ? theme.palette.secondary.dark
            : theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText,
        '& div.preview-card-description-container': {
          '& p': {
            color: theme.palette.secondary.contrastText,
          },
        },
      },

      '& div.preview-card-img-container': {
        '& img': { width: 165, height: '100%' },
      },

      '& div.preview-card-description-container': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        maxWidth: `calc(100% - 165px)`,
        width: `calc(100% - 165px)`,
        padding: '15px 20px',

        '& p.preview-card-title': {
          width: '100%',
          fontWeight: 'bold',
          color: theme.palette.text.primary,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize: '18px',
          lineHeight: '22px',
          margin: 0,
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': 2,
          maxHeight: 44,
        },
        '& p.preview-card-description': {
          width: '100%',
          color: theme.palette.text.secondary,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize: '16px',
          lineHeight: '20px',
          margin: 0,
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': 2,
          maxHeight: 40,
        },
        '& p.preview-card-domain': {
          width: '100%',
          color: theme.palette.text.secondary,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize: '15px',
          lineHeight: '16px',
          margin: 0,
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': 1,
          maxHeight: 16,
          textAlign: 'right',
        },
      },
    },
  },
}));

const CodeBlock = ({ language, value }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export const MarkdownImage = ({ alt, src }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Image
        alt={alt}
        src={
          src.includes('http://') || src.includes('https://')
            ? src
            : require(`../content/assets/${src}`)
        }
        previewSrc={
          src.includes('http://') || src.includes('https://')
            ? src
            : require(`../content/assets/${src}?lqip`)
        }
      />
    </div>
  );
};

const MarkdownContent = ({ escapeHtml, source }) => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <ReactMarkdown
        escapeHtml={escapeHtml}
        source={source}
        renderers={{ code: CodeBlock, image: MarkdownImage }}
      />
    </div>
  );
};

export default MarkdownContent;
