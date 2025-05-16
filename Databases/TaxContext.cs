using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;


namespace Yas.Template.Web.Databases;

public partial class TaxContext : DbContext
{
    public TaxContext()
    {
    }

    public TaxContext(DbContextOptions<TaxContext> options)
        : base(options)
    {
    }

    public virtual DbSet<TbProduct> TbProducts { get; set; }

    public virtual DbSet<TbLog> TbLogs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
=> optionsBuilder.UseSqlServer(@"Server=990412-INSTALED\SQL2022;Database=YasTax Data;user id=sa;password=123;MultipleActiveResultSets=true;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.UseCollation("Persian_100_CI_AI");


        modelBuilder.Entity<TbProduct>(entity =>
        {
            entity.HasKey(e => e.ProductId);

            entity.ToTable("TbProduct");

            entity.Property(e => e.ProductId).ValueGeneratedNever();
            entity.Property(e => e.ProductName).HasMaxLength(4000);
            entity.Property(e => e.ProductNumber).HasMaxLength(50);
            entity.Property(e => e.UnitName).HasMaxLength(10);


        });

        modelBuilder.Entity<TbLog>(entity =>
        {
            entity.HasKey(e => e.LogId);

            entity.ToTable("TbLog");

            entity.Property(e => e.LogId).ValueGeneratedNever();
            entity.Property(e => e.CreateOn).HasColumnType("datetime");
            entity.Property(e => e.Ipaddress)
                .HasMaxLength(50)
                .HasColumnName("IPAddress");
            entity.Property(e => e.Message).HasColumnType("ntext");


        });


        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
