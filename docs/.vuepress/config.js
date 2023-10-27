// const requireRouter = import.meta.webpackContext('../guide/widgets', true, /\.md$/)

const requireContext = require('require-context')
const path = require('path')

const context = requireContext(path.join(__dirname, '../guide/widgets'), false, /\.md$/)
const children = []
context.keys().map(item => {
  const title = item.split('.md')[0]
  if (title === 'README') return
  children.push({
    title,
    path: `/guide/widgets/${title}`
  })
})

module.exports = {
  title: 'Hello Flutter',
  description: 'Study Flutter',

  themeConfig: {
    sidebar: [
      {
        title: 'widgets',
        path: '/guide/widgets',
        collapsable: true,
        sidebarDepth: 1,
        children,
      },
    ]
  },
}