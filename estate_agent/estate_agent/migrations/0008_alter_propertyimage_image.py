# Generated by Django 4.2.3 on 2023-09-24 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('estate_agent', '0007_alter_propertyimage_property'),
    ]

    operations = [
        migrations.AlterField(
            model_name='propertyimage',
            name='image',
            field=models.ImageField(upload_to='images/'),
        ),
    ]
