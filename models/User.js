// In User.js or another model file
User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
  
  Post.belongsTo(User, {
    foreignKey: 'userId'
  });
  