module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'      
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js 2+ project',
    },
    author: {
      type: 'string',
      message: 'Author',
    }
  }
}