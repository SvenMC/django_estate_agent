# Generated by Django 4.2.3 on 2023-08-24 18:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('estate_agent', '0004_remove_property_image_propertyimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='propertyimage',
            name='image',
            field=models.ImageField(upload_to='images/'),
        ),
    ]
