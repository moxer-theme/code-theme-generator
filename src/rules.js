"use strict";
exports.__esModule = true;
function getGlobalSettingGenerator(name) {
    return function (color) {
        if (!color) {
            return undefined;
        }
        var result = {};
        result[name] = color;
        return result;
    };
}
function getSimpleColorGenerator(name, scope, fontStyle) {
    if (fontStyle === void 0) { fontStyle = 0 /* NONE */; }
    return function (color) {
        var colorRule = {
            name: name,
            scope: scope,
            settings: {
                foreground: color
            }
        };
        var fontStyles = [];
        if (fontStyle & 1 /* ITALIC */) {
            fontStyles.push('italic');
        }
        if (fontStyle & 2 /* BOLD */) {
            fontStyles.push('bold');
        }
        if (fontStyle & 4 /* UNDERLINE */) {
            fontStyles.push('underline');
        }
        if (fontStyles.length > 0) {
            colorRule.settings.fontStyle = fontStyles.join(' ');
        }
        return colorRule;
    };
}
exports.globalRules = [
    {
        color: function (s) { return s.base.background; },
        generate: getGlobalSettingGenerator('background')
    },
    {
        color: function (s) { return s.base.foreground; },
        generate: getGlobalSettingGenerator('foreground')
    }
];
exports.tokenRules = [
    // String: It's important that string is put first so that other scopes can override strings
    // within template expressions
    {
        color: function (s) { return s.syntax.string; },
        generate: getSimpleColorGenerator('String', 'string')
    },
    {
        color: function (s) { return s.syntax.punctuation; },
        generate: getSimpleColorGenerator('Punctuation', 'punctuation')
    },
    {
        color: function (s) { return s.syntax.stringEscape; },
        generate: getSimpleColorGenerator('String Escape', 'constant.character.escape, text.html constant.character.entity.named, punctuation.definition.entity.html')
    },
    {
        color: function (s) { return s.syntax.boolean; },
        generate: getSimpleColorGenerator('Boolean', 'constant.language.boolean')
    },
    {
        color: function (s) { return s.syntax.number; },
        generate: getSimpleColorGenerator('Number', 'constant.numeric')
    },
    {
        color: function (s) { return s.syntax.variable; },
        generate: getSimpleColorGenerator('Variable', 'variable, variable.parameter, support.variable, support.constant, meta.function-call variable.language, meta.definition.variable entity.name.function, meta.function-call.arguments')
    },
    {
        color: function (s) { return s.syntax.otherKeyword; },
        generate: getSimpleColorGenerator('Other Keyword', 'keyword.other')
    },
    // Support.type.object: module.exports (ts)
    {
        color: function (s) { return s.syntax.keyword; },
        generate: getSimpleColorGenerator('Keyword', 'keyword, modifier, variable.language.this, support.type.object, constant.language')
    },
    // Support.function: eg. join in path.join in TypeScript
    {
        color: function (s) { return s.syntax.functionCall; },
        generate: getSimpleColorGenerator('Function call', 'entity.name.function, support.function')
    },
    // Storage.type: var (ts)
    // storage.modifier: private (ts)
    {
        color: function (s) { return s.syntax.storage; },
        generate: getSimpleColorGenerator('Storage', 'storage.type, storage.modifier')
    },
    // Module.support: imported modules in TypeScript
    {
        color: function (s) { return s.syntax.identifier; },
        generate: getSimpleColorGenerator('Modules', 'support.module, support.node', 1 /* ITALIC */)
    },
    // Support.type: `boolean` (ts)
    {
        color: function (s) { return s.syntax.type; },
        generate: getSimpleColorGenerator('Type', 'support.type, variable.parameter')
    },
    // Entity.name.type: `: SomeType` (ts)
    {
        color: function (s) { return s.syntax.type; },
        generate: getSimpleColorGenerator('Type', 'entity.name.type, entity.other.inherited-class')
    },
    {
        color: function (s) { return s.syntax.comment; },
        generate: getSimpleColorGenerator('Comment', 'comment', 1 /* ITALIC */)
    },
    {
        color: function (s) { return s.syntax.comment; },
        generate: getSimpleColorGenerator('Comment', 'comment punctuation.definition.comment', 1 /* ITALIC */)
    },
    {
        color: function (s) { return s.syntax.punctuation; },
        generate: getSimpleColorGenerator('Punctuation', 'punctuation')
    },
    {
        color: function (s) { return s.syntax["class"]; },
        generate: getSimpleColorGenerator('Class', 'entity.name, entity.name.type.class, support.type, support.class, support.orther.namespace, meta.use', 0 /* NONE */)
    },
    // Variable.object.property: `class A { meth = 0; }` (ts)
    // meta.field.declaration entity.name.function: `class A { meth = () => 0; }` (ts)
    {
        color: function (s) { return s.syntax.classMember; },
        generate: getSimpleColorGenerator('Class variable', 'variable.object.property, meta.field.declaration entity.name.function')
    },
    // Meta.definition.method entity.name.function: `class A { meth() {} }` (ts)
    {
        color: function (s) { return s.syntax.classMember; },
        generate: getSimpleColorGenerator('Class method', 'meta.definition.method entity.name.function')
    },
    {
        color: function (s) { return s.syntax["function"]; },
        generate: getSimpleColorGenerator('Function definition', 'meta.function entity.name.function')
    },
    // Punctuation.definition.template-expression: `${}`
    {
        color: function (s) { return s.syntax.keyword; },
        generate: getSimpleColorGenerator('Template expression', 'template.expression.begin, template.expression.end, punctuation.definition.template-expression.begin, punctuation.definition.template-expression.end')
    },
    {
        color: function (s) { return s.base.foreground; },
        generate: getSimpleColorGenerator('Reset embedded/template expression colors', 'meta.embedded, source.groovy.embedded, meta.template.expression')
    },
    {
        color: function (s) { return s.syntax.identifier; },
        generate: getSimpleColorGenerator('YAML key', 'entity.name.tag.yaml')
    },
    // Modifier: This includes things like access modifiers, static, readonly, etc.
    {
        color: function (s) { return s.syntax.modifier; },
        generate: getSimpleColorGenerator('Modifier', 'modifier')
    },
    /**
     * JSON
     */
    {
        color: function (s) { return s.syntax.identifier; },
        generate: getSimpleColorGenerator('JSON key', 'meta.object-literal.key, meta.object-literal.key string, support.type.property-name.json')
    },
    {
        color: function (s) { return s.syntax.keyword; },
        generate: getSimpleColorGenerator('JSON constant', 'constant.language.json')
    },
    /**
     * CSS
     */
    {
        color: function (s) { return s.syntax.cssClass; },
        generate: getSimpleColorGenerator('CSS class', 'entity.other.attribute-name.class')
    },
    {
        color: function (s) { return s.syntax.cssId; },
        generate: getSimpleColorGenerator('CSS ID', 'entity.other.attribute-name.id')
    },
    {
        color: function (s) { return s.syntax.cssTag; },
        generate: getSimpleColorGenerator('CSS tag', 'source.css entity.name.tag')
    },
    /**
     * HTML
     */
    {
        color: function (s) { return s.syntax.keyword; },
        generate: getSimpleColorGenerator('HTML tag outer', 'meta.tag, punctuation.definition.tag')
    },
    {
        color: function (s) { return s.syntax.identifier; },
        generate: getSimpleColorGenerator('HTML tag inner', 'entity.name.tag')
    },
    {
        color: function (s) { return s.syntax.storage; },
        generate: getSimpleColorGenerator('HTML tag attribute', 'entity.other.attribute-name')
    },
    /**
     * Markdown
     */
    {
        color: function (s) { return s.syntax.keyword; },
        generate: getSimpleColorGenerator('Markdown heading', 'markup.heading')
    },
    {
        color: function (s) { return s.syntax.identifier; },
        generate: getSimpleColorGenerator('Markdown link text', 'text.html.markdown meta.link.inline, meta.link.reference')
    },
    {
        color: function (s) { return s.syntax.markdownQuote; },
        generate: getSimpleColorGenerator('Markdown block quote', 'text.html.markdown markup.quote')
    },
    {
        color: function (s) { return s.syntax.keyword; },
        generate: getSimpleColorGenerator('Markdown list item', 'text.html.markdown beginning.punctuation.definition.list')
    },
    {
        color: function (s) { return s.syntax.identifier; },
        generate: getSimpleColorGenerator('Markdown italic', 'markup.italic', 1 /* ITALIC */)
    },
    {
        color: function (s) { return s.syntax.identifier; },
        generate: getSimpleColorGenerator('Markdown bold', 'markup.bold', 2 /* BOLD */)
    },
    {
        color: function (s) { return s.syntax.identifier; },
        generate: getSimpleColorGenerator('Markdown bold italic', 'markup.bold markup.italic, markup.italic markup.bold', 2 /* BOLD */ | 1 /* ITALIC */)
    },
    {
        color: function (s) { return s.syntax.string; },
        generate: getSimpleColorGenerator('Markdown code block', 'markup.fenced_code.block.markdown punctuation.definition.markdown')
    },
    {
        color: function (s) { return s.syntax.string; },
        generate: getSimpleColorGenerator('Markdown inline code', 'markup.inline.raw.string.markdown')
    },
    /**
     * Ini
     */
    {
        color: function (s) { return s.syntax.identifier; },
        generate: getSimpleColorGenerator('INI property name', 'keyword.other.definition.ini')
    },
    {
        color: function (s) { return s.syntax.keyword; },
        generate: getSimpleColorGenerator('INI section title', 'entity.name.section.group-title.ini')
    },
    /**
     * C#
     */
    {
        color: function (s) { return s.syntax["class"]; },
        generate: getSimpleColorGenerator('C# class', 'source.cs meta.class.identifier storage.type', 0 /* NONE */)
    },
    {
        color: function (s) { return s.syntax.classMember; },
        generate: getSimpleColorGenerator('C# class method', 'source.cs meta.method.identifier entity.name.function')
    },
    {
        color: function (s) { return s.syntax.functionCall; },
        generate: getSimpleColorGenerator('C# function call', 'source.cs meta.method-call meta.method, source.cs entity.name.function')
    },
    {
        color: function (s) { return s.syntax.type; },
        generate: getSimpleColorGenerator('C# type', 'source.cs storage.type')
    },
    {
        color: function (s) { return s.syntax.type; },
        generate: getSimpleColorGenerator('C# return type', 'source.cs meta.method.return-type')
    },
    {
        color: function (s) { return s.syntax.comment; },
        generate: getSimpleColorGenerator('C# preprocessor', 'source.cs meta.preprocessor')
    },
    {
        color: function (s) { return s.base.foreground; },
        generate: getSimpleColorGenerator('C# namespace', 'source.cs entity.name.type.namespace')
    },
    /**
     * JSX
     */
    {
        color: function (s) { return s.base.foreground; },
        generate: getSimpleColorGenerator('JSX Text', 'meta.jsx.children, source.js JSXNested', 0 /* NONE */)
    },
    /**
     * C++
     */
    {
        color: function (s) { return s.base.foreground; },
        generate: getSimpleColorGenerator('C-related Block Level Variables', 'source.cpp meta.block variable.other', 0 /* NONE */)
    },
    /**
     * PYTHON
     */
    {
        color: function (s) { return s.base.color1; },
        generate: getSimpleColorGenerator('Member Access Meta', 'source.python meta.member.access.python', 0 /* NONE */)
    },
    {
        color: function (s) { return s.syntax.functionCall; },
        generate: getSimpleColorGenerator('Function Call', 'source.python meta.function-call.python', 0 /* NONE */)
    } // Normalize children text inside components/html elements
];
