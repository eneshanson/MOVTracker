using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Moviesh.Model
{
    public partial class MovieContext : DbContext
    {
        public virtual DbSet<HomePage> HomePage { get; set; }
        public virtual DbSet<Actors> Actors { get; set; }
        public virtual DbSet<Movies> Movies { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        // Unable to generate entity type for table 'dbo.WatchedMovies'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.IntMovies'. Please see the warning messages.
        public MovieContext(DbContextOptions<MovieContext> options) : base(options)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=ENES;Database=Movie;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Actors>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id");

                entity.Property(e => e.Name).HasMaxLength(100);
            });

            modelBuilder.Entity<Movies>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id");

                entity.Property(e => e.Name).HasMaxLength(100);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id");

                entity.Property(e => e.PassWor).HasMaxLength(100);

                entity.Property(e => e.Username).HasMaxLength(100);
            });
            modelBuilder.Entity<HomePage>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.HomeDesc).HasMaxLength(50);

                entity.Property(e => e.HomeName).HasMaxLength(30);
            });
        }
    }
}
